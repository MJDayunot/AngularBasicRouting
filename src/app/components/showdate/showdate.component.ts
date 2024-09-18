import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-showdate',
  templateUrl: './showdate.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrls: ['./showdate.component.css']
})
export class ShowDateComponent {
  currentDateTime: string | null = null;

  showCurrentDateTime() {
    const now = new Date();
    this.currentDateTime = now.toLocaleString();
  }
}
