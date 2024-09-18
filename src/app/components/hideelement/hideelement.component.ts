import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-hideelement',
  templateUrl: './hideelement.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrls: ['./hideelement.component.css']
})
export class HideElementComponent {
  isVisible = true;

  hideElement() {
    this.isVisible = false;
  }
}
