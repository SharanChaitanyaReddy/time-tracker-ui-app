import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedModalComponent } from './unauthorized-modal/unauthorized-modal.component';

@NgModule({
  declarations: [UnauthorizedModalComponent],
  imports: [CommonModule],
  exports: [UnauthorizedModalComponent]
})
export class SharedModule {}

