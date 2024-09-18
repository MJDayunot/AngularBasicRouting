import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-simplelogin',
  templateUrl: './simplelogin.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./simplelogin.component.css']
})
export class SimpleLoginComponent {
  email: string = '';
  password: string = '';
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
