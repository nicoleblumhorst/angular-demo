import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable()
export class SpinnerService {
  private counter = 0;
  @Output() isLoading: EventEmitter<boolean> = new EventEmitter();

  show() {
    this.counter++;
    if (this.counter === 1) {
      this.isLoading.emit(true);
    }
  }

  hide() {
    this.counter--;
    if (this.counter === 0) {
      this.isLoading.emit(false);
    }
  }

  getCounter(): number {
    return this.counter;
  }
}
