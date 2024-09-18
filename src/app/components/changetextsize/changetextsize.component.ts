import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-changetextsize',
  templateUrl: './changetextsize.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./changetextsize.component.css']
})
export class ChangeTextSizeComponent {
  textSize: number | null = null;

  changeTextSize() {

  }
}
