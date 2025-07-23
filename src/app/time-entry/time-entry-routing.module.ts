import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeEntryComponent } from './components/time-entry.component';

const routes: Routes = [{ path: '',component: TimeEntryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeEntryRoutingModule { }
