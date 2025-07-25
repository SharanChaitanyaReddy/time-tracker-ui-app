import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  { path: '',redirectTo: 'login', pathMatch: 'full'},

  // { path: 'time-entry', loadChildren: () => import('./time-entry/time-entry.module').then(m => m.TimeEntryModule),  canActivate: [AuthGuard] }, 
  // { path: 'time-history', loadChildren: () => import('./time-history/time-history.module').then(m => m.TimeHistoryModule), canActivate: [AuthGuard] },
  { path: 'login', title: 'Login | Time Tracker', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  // Protected Layout Route
  {
    path: 'dashboard',
    title: 'Dashboard | Time Tracker',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'time-entry',
        pathMatch: 'full'
      },
      {
        path: 'time-entry',
        title: 'Time Entry | Time Tracker',
        loadChildren: () => import('./time-entry/time-entry.module').then(m => m.TimeEntryModule)
      },
      {
        path: 'time-history',
        title: 'Time History | Time Tracker',
        loadChildren: () => import('./time-history/time-history.module').then(m => m.TimeHistoryModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./users/user.module').then(m => m.UserModule)
      }
    ]
  },
   { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
