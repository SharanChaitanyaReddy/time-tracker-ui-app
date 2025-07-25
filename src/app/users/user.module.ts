import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, RouterModule.forChild(userRoutes), FormsModule],
})
export class UserModule {}



