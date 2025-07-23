import { Component, OnInit } from '@angular/core';
import { TimeEntryService } from '../services/time-entry.service';
import { TimeEntry } from '../models/time-entry.model';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.scss'],
  imports: [DatePipe, RouterModule, HttpClientModule] // Add DatePipe, RouterModule, and HttpClientModule to providers
})
export class TimeEntryComponent implements OnInit {
  timeEntries: TimeEntry[] = [];

  constructor(private timeEntryService: TimeEntryService) {}

  ngOnInit(): void {
    this.loadTimeEntries();
  }

  loadTimeEntries() {
    this.timeEntryService.getAll().subscribe((data) => {
      this.timeEntries = data;
    });
  }

  deleteEntry(id: any){

  }

  // Later methods: onCreate(), onUpdate(), onDelete()
}

