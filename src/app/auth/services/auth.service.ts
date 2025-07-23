import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:5046/api/v1/auth'; // Update if needed

 login(username: string, password: string): Observable<any> {
  return this.http.post(`${this.apiUrl}/login`, { username, password });
}

 logout(): void {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('role');
}

isLoggedIn(): boolean {
  return !!sessionStorage.getItem('token');
}

getRole(): string | null {
  return sessionStorage.getItem('role');
}

loadXsrfToken(): Promise<void> {
    return this.http.get('http://localhost:5046/api/v1/anti-forgery/xsrf-token', { withCredentials: true })
      .toPromise()
      .then(() => {
        console.log('XSRF token retrieved and cookie set.');
      })
      .catch(error => {
        console.error('Failed to fetch XSRF token:', error);
        // Optional: throw error to prevent app load
      });
  }

}
