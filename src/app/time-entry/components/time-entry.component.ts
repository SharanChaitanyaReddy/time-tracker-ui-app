import { Component, OnInit } from '@angular/core';
import { TimeEntryService } from '../services/time-entry.service';
import { TimeEntry } from '../models/time-entry.model';
@Component({
  selector: 'app-time-entry',
  standalone: false,
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.scss'],

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

