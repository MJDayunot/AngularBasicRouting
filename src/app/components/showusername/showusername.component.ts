import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-showusername',
  templateUrl: './showusername.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./showusername.component.css']
})
export class ShowUsernameComponent {
  username: string = '';
  displayedUsername: string | null = null;

  displayUsername() {
    this.displayedUsername = this.username;
  }
}
