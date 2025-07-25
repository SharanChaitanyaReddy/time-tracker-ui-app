import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

 login(email: string, password: string): Observable<any> {
  return this.http.post(`${environment.apiBaseUrl}/auth/login`, { email, password });
}

 logout(): void {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('role');
  this.router.navigate(['/login']);
}

isLoggedIn(): boolean {
  return !!sessionStorage.getItem('token');
}

getRole(): string | null {
  return sessionStorage.getItem('role');
}

// loadXsrfToken(): Promise<void> {
//     return this.http.get('http://localhost:5046/api/v1/anti-forgery/xsrf-token', { withCredentials: true })
//       .toPromise()
//       .then(() => {
//         console.log('XSRF token retrieved and cookie set.');
//       })
//       .catch(error => {
//         console.error('Failed to fetch XSRF token:', error);
//         // Optional: throw error to prevent app load
//       });
//   }

    refreshToken(token: string) {
    fetch(`${environment.apiBaseUrl}/api/auth/refresh`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => {
      if (data?.token) {
        localStorage.setItem('token', data.token);
      }
    })
    .catch(err => {
      console.error('Refresh failed:', err);
      this.logout(); // fallback
    });
  }

}
