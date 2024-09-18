import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-bookmarklist',
  templateUrl: './bookmarklist.component.html',
  styleUrls: ['./bookmarklist.component.css'],
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  standalone: true
})
export class BookmarkListComponent {
  url: string = '';
  bookmarks: string[] = [];

  addBookmark() {
    if (this.url && !this.bookmarks.includes(this.url)) {
      this.bookmarks.push(this.url);
      this.url = '';
    }
  }
}
