import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  num1: number | null = null;
  num2: number | null = null;
  result: number | null = null;

  calculate(operation: string) {
    if (this.num1 !== null && this.num2 !== null) {
      switch (operation) {
        case 'add':
          this.result = this.num1 + this.num2;
          break;
        case 'subtract':
          this.result = this.num1 - this.num2;
          break;
        case 'multiply':
          this.result = this.num1 * this.num2;
          break;
        case 'divide':
          if (this.num2 !== 0) {
            this.result = this.num1 / this.num2;
          } else {
            this.result = null;
            alert('Cannot divide by zero');
          }
          break;
      }
    } else {
      this.result = null;
      alert('Please enter both numbers');
    }
  }
}
