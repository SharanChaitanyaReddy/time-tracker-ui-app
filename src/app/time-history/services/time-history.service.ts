import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface TimeEntry {
  id: number;
  userId: number;
  projectId: number;
  startTime: string;
  endTime: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TimeHistoryService {
  private readonly apiUrl = `${environment.apiBaseUrl}/timeentries`; 

  constructor(private http: HttpClient) {}
  getAllTimeEntries(): Observable<TimeEntry[]> {
    return this.http.get<TimeEntry[]>(this.apiUrl);
  }         
  getUserTimeEntries(userId: number): Observable<TimeEntry[]> {
    return this.http.get<TimeEntry[]>(`${this.apiUrl}/${userId}`);
  }
}

