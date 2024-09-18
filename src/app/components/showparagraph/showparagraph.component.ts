import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-showparagraph',
  templateUrl: './showparagraph.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrls: ['./showparagraph.component.css']
})
export class ShowParagraphComponent {
  isVisible = false;

  showParagraph() {
    this.isVisible = true;
  }
}
