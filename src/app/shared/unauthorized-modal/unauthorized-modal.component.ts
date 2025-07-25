import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-unauthorized-modal',
  standalone: false,
  templateUrl: './unauthorized-modal.component.html',
})
export class UnauthorizedModalComponent {
   @Output() closed = new EventEmitter<void>();

  close(): void {
    this.closed.emit();
  }
}

