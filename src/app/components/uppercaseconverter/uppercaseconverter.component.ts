import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-uppercaseconverter',
  templateUrl: './uppercaseconverter.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./uppercaseconverter.component.css']
})
export class UppercaseconverterComponent {
  textInput: string = '';
  convertedText: string | null = null;

  convertToUppercase(): void {
    this.convertedText = this.textInput.toUpperCase();
  }
}
