import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-evenoddchecker',
  templateUrl: './evenoddchecker.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./evenoddchecker.component.css']
})
export class EvenOddCheckerComponent {
  number: number | null = null;
  result: string | null = null;

  checkEvenOdd() {
    if (this.number !== null) {
      if (this.number % 2 === 0) {
        this.result = `${this.number} is Even.`;
      } else {
        this.result = `${this.number} is Odd.`;
      }
    } else {
      this.result = null;
    }
  }
}
