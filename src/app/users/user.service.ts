import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'users';

  constructor(private http: HttpClient) {}

  createUser(user: any): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}/${this.apiUrl}`, user);
  }

  getTeams(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiBaseUrl}/teams`);
  }

}

