import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-wordshuffler',
  templateUrl: './wordshuffler.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./wordshuffler.component.css']
})
export class WordshufflerComponent {
  word: string = '';
  shuffledWord: string = '';

  shuffleWord(): void {
    if (this.word) {
      this.shuffledWord = this.shuffle(this.word);
    }
  }

  private shuffle(word: string): string {
    let array = word.split('');
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
  }
}
