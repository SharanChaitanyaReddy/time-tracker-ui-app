import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimeEntry } from '../models/time-entry.model';

@Injectable({
  providedIn: 'root'
})
export class TimeEntryService {
  private apiUrl = 'http://localhost:5046/api/v1/timeentries'; // Update if needed

  constructor(private http: HttpClient) {}

  getAll(): Observable<TimeEntry[]> {
    return this.http.get<TimeEntry[]>(`${this.apiUrl}`);
  }

  getById(id: number): Observable<TimeEntry> {
    return this.http.get<TimeEntry>(`${this.apiUrl}/${id}`);
  }

  create(entry: TimeEntry): Observable<TimeEntry> {
    return this.http.post<TimeEntry>(this.apiUrl, entry);
  }

  update(id: number, entry: TimeEntry): Observable<TimeEntry> {
    return this.http.put<TimeEntry>(`${this.apiUrl}/${id}`, entry);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
