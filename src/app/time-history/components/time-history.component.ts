import { Component, OnInit } from '@angular/core';
import { TimeHistoryService, TimeEntry } from '../services/time-history.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-time-history',
  templateUrl: './time-history.component.html',
  styleUrls: ['./time-history.component.scss'],
  imports: [RouterModule,HttpClientModule] // No additional imports needed here
})
export class TimeHistoryComponent implements OnInit {
  timeEntries: TimeEntry[] = [];

  constructor(private timeHistoryService: TimeHistoryService) {}

  ngOnInit(): void {
    const userId = 1; // Replace with actual user ID (from token or auth service)
    this.timeHistoryService.getUserTimeEntries(userId).subscribe({
      next: data => this.timeEntries = data,
      error: err => console.error('Error loading time entries', err)
    });
  }
}

