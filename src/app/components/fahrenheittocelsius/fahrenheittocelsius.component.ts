import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-fahrenheittocelsius',
  templateUrl: './fahrenheittocelsius.component.html',
  styleUrls: ['./fahrenheittocelsius.component.css'],
  imports: [
    FormsModule,
    NgIf
  ],
  standalone: true
})
export class FahrenheitToCelsiusComponent {
  fahrenheit: number | null = null;
  celsius: number | null = null;

  convertToCelsius() {
    if (this.fahrenheit !== null) {
      this.celsius = ((this.fahrenheit - 32) * 5) / 9;
    }
  }
}
