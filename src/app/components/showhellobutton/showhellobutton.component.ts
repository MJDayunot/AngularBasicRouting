import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-showhellobutton',
  templateUrl: './showhellobutton.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrls: ['./showhellobutton.component.css']
})

export class ShowhellobuttonComponent {
  showMessage: boolean = false;

  // Method to show the "Hello World" message
  displayMessage() {
    this.showMessage = true;
  }
}
