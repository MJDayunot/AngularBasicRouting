import { Component } from '@angular/core';

@Component({
  selector: 'app-showalert',
  templateUrl: './showalert.component.html',
  standalone: true,
  styleUrls: ['./showalert.component.css']
})
export class ShowAlertComponent {
  showAlert() {
    alert('This is an alert!');
  }
}
