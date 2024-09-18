import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-currencyformatter',
  templateUrl: './currencyformatter.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./currencyformatter.component.css']
})
export class CurrencyFormatterComponent {
  amount: number | null = null;         // Input amount
  selectedCurrency: string = 'USD';     // Default currency
  formattedAmount: string | null = null; // Formatted currency amount

  formatCurrency(): void {
    if (this.amount !== null && this.amount >= 0) {
      this.formattedAmount = this.formatAmount(this.amount, this.selectedCurrency);
    } else {
      this.formattedAmount = null;
    }
  }

  private formatAmount(amount: number, currency: string): string {
    let options: Intl.NumberFormatOptions = { style: 'currency', currency: currency };
    let locale = 'en-US'; // Default locale

    // Custom locale for PHP
    if (currency === 'PHP') {
      locale = 'fil-PH';
    }

    // Custom formatting for Euro
    if (currency === 'EUR') {
      options.currencyDisplay = 'symbol';
    }

    return new Intl.NumberFormat(locale, options).format(amount);
  }
}
