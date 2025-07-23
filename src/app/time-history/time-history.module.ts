import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TimeHistoryRoutingModule } from './time-history-routing.module';
import { TimeHistoryComponent } from './components/time-history.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    TimeHistoryRoutingModule,
    HttpClientModule,
    TimeHistoryComponent
  ]
})
export class TimeHistoryModule { }
