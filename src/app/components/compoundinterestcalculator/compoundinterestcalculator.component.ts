import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CurrencyPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-compoundinterestcalculator',
  templateUrl: './compoundinterestcalculator.component.html',
  standalone: true,
  imports: [
    FormsModule,
    CurrencyPipe,
    NgIf
  ],
  styleUrls: ['./compoundinterestcalculator.component.css']
})
export class CompoundInterestCalculatorComponent {
  principal: number | null = null;
  rate: number | null = null;
  time: number | null = null;
  frequency: number | null = null;
  calculatedInterest: number | null = null;

  calculateCompoundInterest(): void {
    if (this.principal !== null && this.rate !== null && this.time !== null && this.frequency !== null) {
      const r = this.rate / 100 / this.frequency;
      const n = this.frequency * this.time;
      this.calculatedInterest = this.principal * Math.pow((1 + r), n) - this.principal;
    } else {
      this.calculatedInterest = null;
    }
  }
}
