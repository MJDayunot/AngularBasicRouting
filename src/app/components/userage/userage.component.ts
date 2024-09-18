import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-userage',
  templateUrl: './userage.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./userage.component.css']
})
export class UserAgeComponent {
  birthYear: number | null = null;
  age: number | null = null;

  calculateAge() {
    if (this.birthYear) {
      const currentYear = new Date().getFullYear();
      this.age = currentYear - this.birthYear;
    }
  }
}
