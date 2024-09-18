import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-fibonaccigenerator',
  templateUrl: './fibonaccigenerator.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./fibonaccigenerator.component.css']
})
export class FibonacciGeneratorComponent {
  count: number | null = null;
  fibonacciNumbers: number[] = [];

  generateFibonacci(): void {
    if (this.count !== null && this.count > 0) {
      this.fibonacciNumbers = this.calculateFibonacci(this.count);
    } else {
      this.fibonacciNumbers = [];
    }
  }

  private calculateFibonacci(n: number): number[] {
    const fib: number[] = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
      fib.push(a);
      [a, b] = [b, a + b];
    }
    return fib;
  }
}
