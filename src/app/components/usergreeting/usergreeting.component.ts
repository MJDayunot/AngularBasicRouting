import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-usergreeting',
  templateUrl: './usergreeting.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./usergreeting.component.css']
})
export class UserGreetingComponent {
  userName: string = '';
  greetingMessage: string | null = null;

  showGreeting() {
    if (this.userName.trim()) {
      this.greetingMessage = `Hello, ${this.userName}! Welcome!`;
    } else {
      this.greetingMessage = 'Please enter your name.';
    }
  }
}
