import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-factorialcalculator',
  templateUrl: './factorialcalculator.component.html',
  styleUrls: ['./factorialcalculator.component.css'],
  imports: [
    FormsModule,
    NgIf
  ],
  standalone: true
})
export class FactorialCalculatorComponent {
  number: number | null = null;
  factorial: number | null = null;

  calculateFactorial() {
    if (this.number !== null && this.number >= 0) {
      this.factorial = this.computeFactorial(this.number);
    } else {
      this.factorial = null;
    }
  }

  private computeFactorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.computeFactorial(n - 1);
  }
}
