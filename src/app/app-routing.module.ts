import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '',redirectTo: 'login', pathMatch: 'full',},
  { path: 'time-entry', loadChildren: () => import('./time-entry/time-entry.module').then(m => m.TimeEntryModule),  canActivate: [AuthGuard] }, 
  { path: 'time-history', loadChildren: () => import('./time-history/time-history.module').then(m => m.TimeHistoryModule), canActivate: [AuthGuard] },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
