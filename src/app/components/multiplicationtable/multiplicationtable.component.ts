import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-multiplicationtable',
  templateUrl: './multiplicationtable.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./multiplicationtable.component.css']
})
export class MultiplicationTableComponent {
  number: number | null = null;
  multiplicationTable: string[] = [];

  generateTable() {
    if (this.number !== null) {
      this.multiplicationTable = [];
      for (let i = 1; i <= 10; i++) {
        this.multiplicationTable.push(`${this.number} x ${i} = ${this.number * i}`);
      }
    }
  }
}
