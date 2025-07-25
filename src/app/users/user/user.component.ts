import { Component, NgModule, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  standalone: false,
  styleUrls: ['./user.component.scss'], 
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  user = {
    FirstName: '',
    LastName: '',
    PasswordHash: '',
    Email: '',
    Role: 'User',
    TeamId: null,
    HourlyRate: null,
    IsActive: true
  };

  teams: any[] = []; 

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadTeams();
  }

  loadTeams(): void {
    this.userService.getTeams().subscribe({
      next: (data) => {
        this.teams = data;
      },
      error: (err) => {
        console.error('Failed to load teams:', err);
      }
    });
  }

  onSubmit() {
    this.userService.createUser(this.user).subscribe({
      next: (res) => alert('User created successfully'),
      error: (err) => alert('Error creating user')
    });
  }
}

