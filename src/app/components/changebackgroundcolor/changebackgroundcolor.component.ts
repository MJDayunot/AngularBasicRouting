import { Component } from '@angular/core';

@Component({
  selector: 'app-changebackgroundcolor',
  templateUrl: './changebackgroundcolor.component.html',
  standalone: true,
  styleUrls: ['./changebackgroundcolor.component.css']
})
export class ChangeBackgroundColorComponent {
  changeBackgroundColor() {
    document.body.style.backgroundColor = 'lightblue';
  }
}
