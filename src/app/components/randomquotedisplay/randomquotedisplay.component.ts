import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-randomquotedisplay',
  templateUrl: './randomquotedisplay.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrls: ['./randomquotedisplay.component.css']
})
export class RandomQuoteDisplayComponent {
  quotes: string[] = [
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "The best way to predict the future is to invent it. – Alan Kay",
    "It does not matter how slowly you go as long as you do not stop. – Confucius"
  ];
  currentQuote: string = '';

  showRandomQuote(): void {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.currentQuote = this.quotes[randomIndex];
  }
}
