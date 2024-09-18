import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-temperatureconverter',
  templateUrl: './temperatureconverter.component.html',
  styleUrls: ['./temperatureconverter.component.css'],
  imports: [
    FormsModule,
    NgIf
  ],
  standalone: true
})
export class TemperatureConverterComponent {
  celsius: number | null = null;
  fahrenheit: number | null = null;
  conversionType: string = 'CtoF';

  convertTemperature() {
    if (this.conversionType === 'CtoF' && this.celsius !== null) {
      this.fahrenheit = (this.celsius * 9/5) + 32;
    } else if (this.conversionType === 'FtoC' && this.fahrenheit !== null) {
      this.celsius = (this.fahrenheit - 32) * 5/9;
    }
  }
}
