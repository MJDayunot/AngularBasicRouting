import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./simpleform.component.css']
})
export class SimpleFormComponent {
  model = {
    name: '',
    email: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
