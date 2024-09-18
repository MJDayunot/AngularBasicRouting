import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-multiplicationchecker',
  templateUrl: './multiplicationchecker.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./multiplicationchecker.component.css']
})
export class MultiplicationcheckerComponent {
  number1: number | null = null;
  number2: number | null = null;
  isMultiple: boolean | null = null;

  checkIfMultiple(): void {
    if (this.number1 !== null && this.number2 !== null && this.number2 !== 0) {
      this.isMultiple = this.number1 % this.number2 === 0;
    } else {
      this.isMultiple = null;
    }
  }
}
