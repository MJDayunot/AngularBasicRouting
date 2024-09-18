import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-palindromechecker',
  templateUrl: './palindromechecker.component.html',
  styleUrls: ['./palindromechecker.component.css'],
  imports: [
    FormsModule,
    NgIf
  ],
  standalone: true
})
export class PalindromeCheckerComponent {
  inputText: string = '';
  isPalindrome: boolean | null = null;

  checkPalindrome() {
    const cleanedText = this.inputText.replace(/\s+/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');
    this.isPalindrome = cleanedText === reversedText;
  }
}
