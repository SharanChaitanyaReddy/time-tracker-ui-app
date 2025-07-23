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

  constructor(private authService: AuthService, private router: Router) {}
login() {
  this.authService.login(this.username, this.password).subscribe({
    next: res => {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('role', res.role);
      this.router.navigate(['/time-entry']);
    },
    error: err => alert('Invalid login')
  });
}

}
