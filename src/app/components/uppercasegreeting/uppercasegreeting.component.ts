import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-uppercasegreeting',
  templateUrl: './uppercasegreeting.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./uppercasegreeting.component.css']
})
export class UppercaseGreetingComponent {
  name: string = '';
  uppercaseName: string = '';

  convertToUppercase(): void {
    this.uppercaseName = this.name.toUpperCase();
  }
}
