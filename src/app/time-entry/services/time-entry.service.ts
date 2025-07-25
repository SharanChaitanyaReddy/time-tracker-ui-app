import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimeEntry } from '../models/time-entry.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimeEntryService {
  private apiUrl = '/timeentries'; // Update if needed

  constructor(private http: HttpClient) {}

  getAll(): Observable<TimeEntry[]> {
    return this.http.get<TimeEntry[]>(`${environment.apiBaseUrl}${this.apiUrl}`);
  }

  getById(id: number): Observable<TimeEntry> {
    return this.http.get<TimeEntry>(`${environment.apiBaseUrl}${this.apiUrl}/${id}`);
  }

  create(entry: TimeEntry): Observable<TimeEntry> {
    return this.http.post<TimeEntry>(`${environment.apiBaseUrl}${this.apiUrl}`, entry);
  }

  update(id: number, entry: TimeEntry): Observable<TimeEntry> {
    return this.http.put<TimeEntry>(`${environment.apiBaseUrl}${this.apiUrl}/${id}`, entry);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiBaseUrl}${this.apiUrl}/${id}`);
  }
}
