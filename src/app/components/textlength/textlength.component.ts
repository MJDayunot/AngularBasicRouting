import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-textlength',
  templateUrl: './textlength.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./textlength.component.css']
})
export class TextLengthComponent {
  inputText: string = '';
  length: number = 0;

  calculateLength() {
    this.length = this.inputText.length;
  }
}
