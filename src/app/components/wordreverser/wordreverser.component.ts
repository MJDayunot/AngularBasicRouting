import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-wordreverser',
  templateUrl: './wordreverser.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./wordreverser.component.css']
})
export class WordReverserComponent {
  word: string = '';
  reversedWord: string = '';

  reverseWord() {
    this.reversedWord = this.word.split('').reverse().join('');
  }
}
