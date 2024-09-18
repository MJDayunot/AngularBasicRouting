import { Component } from '@angular/core';

@Component({
  selector: 'app-printmessagetoconsole',
  templateUrl: './printmessagetoconsole.component.html',
  standalone: true,
  styleUrls: ['./printmessagetoconsole.component.css']
})
export class PrintMessageToConsoleComponent {
  printMessage() {
    console.log('This is a message printed to the console!');
  }
}
