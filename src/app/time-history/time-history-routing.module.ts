import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeHistoryComponent } from './components/time-history.component';

const routes: Routes = [{ path: '', component: TimeHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeHistoryRoutingModule { }
