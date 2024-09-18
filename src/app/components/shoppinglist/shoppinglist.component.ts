import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
  imports: [
    FormsModule,
    NgForOf
  ],
  standalone: true
})
export class ShoppingListComponent {
  newItem: string = '';
  shoppingList: string[] = [];

  addItem() {
    if (this.newItem.trim()) {
      this.shoppingList.push(this.newItem.trim());
      this.newItem = '';
    }
  }

  removeItem(index: number) {
    this.shoppingList.splice(index, 1);
  }
}
