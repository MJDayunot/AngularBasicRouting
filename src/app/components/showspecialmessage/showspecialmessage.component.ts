import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-showspecialmessage',
  templateUrl: './showspecialmessage.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrls: ['./showspecialmessage.component.css']
})
export class ShowSpecialMessageComponent {
  isVisible = false;

  showSpecialMessage() {
    this.isVisible = true;
  }
}
