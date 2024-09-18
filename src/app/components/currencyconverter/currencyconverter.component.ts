import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DecimalPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  standalone: true,
  imports: [
    FormsModule,
    DecimalPipe,
    NgIf
  ],
  styleUrls: ['./currencyconverter.component.css']
})
export class CurrencyConverterComponent {
  usdAmount: number | null = null;
  phpAmount: number | null = null;

  // Conversion rate: 1 USD = 56 PHP
  private readonly conversionRate: number = 56;

  convertCurrency() {
    if (this.usdAmount !== null) {
      this.phpAmount = this.usdAmount * this.conversionRate;
    } else {
      this.phpAmount = null;
    }
  }
}
