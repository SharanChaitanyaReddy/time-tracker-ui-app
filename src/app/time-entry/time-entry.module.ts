import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TimeEntryRoutingModule } from './time-entry-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TimeEntryComponent } from './components/time-entry.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule, 
    TimeEntryRoutingModule
  ]
})
export class TimeEntryModule { }
