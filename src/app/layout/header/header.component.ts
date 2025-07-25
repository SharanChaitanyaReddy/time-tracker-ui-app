import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { environment } from '../../../environments/environment';

interface Project {
  id: string;
  name: string;
}

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  initials = 'AB';
  private refreshCheckInterval: any;
  projects: Project[] = [];
  selectedProjectId: string = '';
  isUserAdmin = false;
  accountOptions: any[] = [];
  constructor(private router: Router, private http: HttpClient, private authService: AuthService  ) {}

  ngOnInit(): void {
     const role = this.authService.getRole();
    this.isUserAdmin = role === 'admin' || role === 'operations';
    this.setUserInitials();
    this.startTokenMonitor();
    this.fetchProjects();
    this.accountOptions = [
      {
        sortby:1,
        label: 'Profile',
        route: '/dashboard/profile'
      },
      {
        sortBy: 3,
        label: 'Logout',
        action: () => this.logout() 
      }
    ];

    if(this.isUserAdmin) {
      this.accountOptions.push({
        sortBy: 2,
        label: 'User Admin',
        route: '/dashboard/users'
      });
    } 
  }

  setUserInitials() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.name) {
      this.initials = user.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase();
    }
  }

  logout() {
    this.authService.logout();
  }

  startTokenMonitor() {
    this.refreshCheckInterval = setInterval(() => {
      const token = localStorage.getItem('token');
      if (token && this.isTokenExpiringSoon(token)) {
        this.authService.refreshToken(token);
      }
    }, 60000); // Check every 60s
  }

  isTokenExpiringSoon(token: string): boolean {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp; // In seconds
    const timeRemaining = exp * 1000 - Date.now();
    return timeRemaining < 5 * 60 * 1000; // Less than 5 mins
  }

  ngOnDestroy(): void {
    clearInterval(this.refreshCheckInterval);
  }


    fetchProjects(): void {
    // Example: Replace with your real endpoint
    this.http.get<Project[]>(`${environment.apiBaseUrl}/projects`).subscribe({
      next: (data) => {
        this.projects = data;
        if (this.projects.length) {
          this.selectedProjectId = this.projects[0].id;
        }
      },
      error: (err) => {
        console.error('Failed to load projects:', err);
      }
    });
  }

  onProjectChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.selectedProjectId = select.value;
    console.log('Selected project:', this.selectedProjectId);
    // Optionally notify other components via service
  }
}
