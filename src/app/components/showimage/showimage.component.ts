import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-showimage',
  templateUrl: './showimage.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  styleUrls: ['./showimage.component.css']
})
export class ShowImageComponent {
  isVisible = false;

  showImage() {
    this.isVisible = true;
  }
}
