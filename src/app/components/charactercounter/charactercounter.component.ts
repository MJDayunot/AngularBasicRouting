import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-charactercounter',
  templateUrl: './charactercounter.component.html',
  styleUrls: ['./charactercounter.component.css'],
  imports: [
    FormsModule,
    NgIf
  ],
  standalone: true
})
export class CharacterCounterComponent {
  inputText: string = '';
  characterCount: number = 0;

  countCharacters() {
    this.characterCount = this.inputText.length;
  }
}
