import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: any;
  password: any;
  rememberMe = false;
  footerInfo: any;


  constructor(private authService: AuthService, private router: Router) {}

  
  ngOnInit(): void {
    this.footerInfo = {
      company: 'TimeTracker Inc.',
      version: 'v1.0.3',
      year: new Date().getFullYear()
    };
  }

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: res => {
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('role', res.role);
        this.router.navigate(['/dashboard']);
      },
      error: err => alert('Invalid login')
    });
  }

}
