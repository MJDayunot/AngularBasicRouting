import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html',
  styleUrls: ['./guessnumbergame.component.css'],
  imports: [
    FormsModule,
    NgIf
  ],
  standalone: true
})
export class GuessNumberGameComponent {
  targetNumber: number = this.generateRandomNumber();
  guess: number | null = null;
  message: string = '';

  generateRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  checkGuess() {
    if (this.guess === null) {
      this.message = 'Please enter a number.';
    } else if (this.guess < this.targetNumber) {
      this.message = 'Too low! Try again.';
    } else if (this.guess > this.targetNumber) {
      this.message = 'Too high! Try again.';
    } else {
      this.message = 'Congratulations! You guessed the number!';
    }
  }

  resetGame() {
    this.targetNumber = this.generateRandomNumber();
    this.guess = null;
    this.message = '';
  }
}
