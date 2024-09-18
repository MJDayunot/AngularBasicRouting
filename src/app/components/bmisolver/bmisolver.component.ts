import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DecimalPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-bmisolver',
  templateUrl: './bmisolver.component.html',
  standalone: true,
  imports: [
    FormsModule,
    DecimalPipe,
    NgIf
  ],
  styleUrls: ['./bmisolver.component.css']
})
export class BMISolverComponent {
  height: number | null = null;
  weight: number | null = null;
  bmi: number | null = null;
  bmiCategory: string | null = null;

  calculateBMI(): void {
    if (this.height && this.weight) {
      this.bmi = this.weight / (this.height * this.height);
      this.bmiCategory = this.getBMICategory(this.bmi);
    }
  }

  private getBMICategory(bmi: number): string {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    return 'Obesity';
  }
}
