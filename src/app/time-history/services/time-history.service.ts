import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  private readonly apiUrl = 'http://localhost:5046/api/v1/timeentries'; 

  constructor(private http: HttpClient) {}

  getUserTimeEntries(userId: number): Observable<TimeEntry[]> {
    return this.http.get<TimeEntry[]>(`${this.apiUrl}/${userId}`);
  }
}

