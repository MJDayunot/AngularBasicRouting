import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-wordcounter',
  templateUrl: './wordcounter.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./wordcounter.component.css']
})
export class WordcounterComponent {
  text: string = '';
  wordCount: number | null = null;

  countWords(): void {
    this.wordCount = this.text.trim() === '' ? 0 : this.text.trim().split(/\s+/).length;
  }
}
