import { Component, signal, WritableSignal } from '@angular/core';
import { ChronoPipe } from '../../pipes/chrono-pipe';

@Component({
  imports: [ChronoPipe],
  selector: 'app-chrono',
  styleUrl: './chrono.scss',
  templateUrl: './chrono.html',
})
export class Chrono {
  seconds: WritableSignal<number> = signal(0);
  timer?: number;

  start() {
    if (this.timer) {
      return;
    }

    this.timer = setInterval(() => {
      this.seconds.set(this.seconds() + 1);
    }, 100);
  }

  stop() {
    if (!this.timer) {
      return;
    }
    clearInterval(this.timer);
    this.timer = undefined;
  }

  reset() {
    if (this.timer || this.seconds() <= 0) {
      return;
    }
    this.seconds.set(0);
  }
}
