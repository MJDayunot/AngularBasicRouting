import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-divisiblechecker',
  templateUrl: './divisiblechecker.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./divisiblechecker.component.css']
})
export class DivisibleCheckerComponent {
  number1: number | null = null;
  number2: number | null = null;
  isDivisible: boolean | null = null;

  checkDivisibility(): void {
    if (this.number2 !== null && this.number2 !== 0) {
      this.isDivisible = this.number1 !== null && this.number1 % this.number2 === 0;
    } else {
      this.isDivisible = null; // Handle division by zero case
    }
  }
}
