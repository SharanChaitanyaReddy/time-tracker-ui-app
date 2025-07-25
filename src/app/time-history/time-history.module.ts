import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TimeHistoryRoutingModule } from './time-history-routing.module';
import { TimeHistoryComponent } from './components/time-history.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [    TimeHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TimeHistoryRoutingModule,
    HttpClientModule
  ]
})
export class TimeHistoryModule { }
