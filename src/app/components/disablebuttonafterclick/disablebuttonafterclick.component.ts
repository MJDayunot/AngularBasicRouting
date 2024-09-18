
import { Component } from '@angular/core';

@Component({
  selector: 'app-disablebuttonafterclick',
  templateUrl: './disablebuttonafterclick.component.html',
  standalone: true,
  styleUrls: ['./disablebuttonafterclick.component.css']
})
export class DisableButtonAfterClickComponent {
  isDisabled = false;

  disableButton() {
    this.isDisabled = true;
  }
}
