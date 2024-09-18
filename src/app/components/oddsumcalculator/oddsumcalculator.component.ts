import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-oddsumcalculator',
  templateUrl: './oddsumcalculator.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./oddsumcalculator.component.css']
})
export class OddSumCalculatorComponent {
  number: number | null = null;
  sum: number | null = null;

  calculateOddSum(): void {
    if (this.number !== null && this.number > 0) {
      this.sum = this.calculateSumOfOddNumbers(this.number);
    } else {
      this.sum = null;
    }
  }

  private calculateSumOfOddNumbers(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
      sum += i;
    }
    return sum;
  }
}
