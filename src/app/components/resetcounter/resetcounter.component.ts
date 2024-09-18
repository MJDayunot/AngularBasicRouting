// resetcounter.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-resetcounter',
  templateUrl: './resetcounter.component.html',
  standalone: true,
  styleUrls: ['./resetcounter.component.css']
})
export class ResetCounterComponent {
  counter = 0;

  increment() {
    this.counter++;
  }

  reset() {
    this.counter = 0;
  }
}
