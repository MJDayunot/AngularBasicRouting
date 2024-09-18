import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-displayname',
  templateUrl: './displayname.component.html',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  styleUrls: ['./displayname.component.css']
})
export class DisplaynameComponent {
  name: string = '';
  displayedName: string = '';

  display() {
    this.displayedName = this.name;
  }
}
