import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RoleGuard } from '../auth/role.guard'; // adjust path based on your project

export const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    title: 'Users | Time Tracker',
    canActivate: [RoleGuard],
    data: {
      roles: ['admin', 'operations']
    }
  }
];

