import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CurrencyPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-interestcalculator',
  templateUrl: './interestcalculator.component.html',
  standalone: true,
  imports: [
    FormsModule,
    CurrencyPipe,
    NgIf
  ],
  styleUrls: ['./interestcalculator.component.css']
})
export class InterestCalculatorComponent {
  principal: number | null = null;
  rate: number | null = null;
  time: number | null = null;
  calculatedInterest: number | null = null;

  calculateInterest(): void {
    if (this.principal !== null && this.rate !== null && this.time !== null) {
      this.calculatedInterest = (this.principal * this.rate * this.time) / 100;
    } else {
      this.calculatedInterest = null;
    }
  }
}
