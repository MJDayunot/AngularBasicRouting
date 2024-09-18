import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-randomnumbergenerator',
  templateUrl: './randomnumbergenerator.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./randomnumbergenerator.component.css']
})
export class RandomnumbergeneratorComponent {
  min: number = 0;
  max: number = 100;
  randomNumber: number | null = null;

  generateRandomNumber(): void {
    if (this.min >= this.max) {
      alert('Minimum value must be less than the maximum value.');
      return;
    }
    this.randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }
}
