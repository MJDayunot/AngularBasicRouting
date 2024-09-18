import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-usernamevalidator',
  templateUrl: './usernamevalidator.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./usernamevalidator.component.css']
})
export class UsernameValidatorComponent {
  username: string = '';
  validationResult: string | null = null;

  validateUsername(): void {
    this.validationResult = this.getUsernameValidationResult(this.username);
  }

  private getUsernameValidationResult(username: string): string {
    const minLength = 3;
    const maxLength = 15;
    const usernameRegex = /^[A-Za-z][A-Za-z0-9]*$/;

    if (username.length < minLength || username.length > maxLength) {
      return `Username must be between ${minLength} and ${maxLength} characters long.`;
    }
    if (!usernameRegex.test(username)) {
      return 'Username must start with a letter and contain only letters and numbers.';
    }
    return 'Username is valid!';
  }
}
