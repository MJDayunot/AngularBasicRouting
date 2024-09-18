import { Component } from '@angular/core';

@Component({
  selector: 'app-displayhelloworld',
  templateUrl: './displayhelloworld.component.html',
  styleUrls: ['./displayhelloworld.component.css']
})
export class DisplayhelloworldComponent {
  // Variable to store the text
  message: string = 'Hello World';
}
