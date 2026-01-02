import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { InvestmentResult, UserInput } from './user-input/user-input';
import { Result } from './result/result';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, UserInput, Result, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('investmentCalculator');
  results: InvestmentResult[] = [];
  showResult:boolean=false;

  /** Here we write below method because
 * ✔ Components are siblings
✔ Data is shared between multiple components
✔ Parent controls when to show/hide children
✔ You want predictable, clean architecture
Child → Parent → Another Child
UserInputComponent and ResultComponent are siblings
Sibling components cannot talk directly
Angular enforces one-way data flow
 */

  // Called when UserInput emits calculation
  onCalculation(calculation: InvestmentResult[]) {
    this.results = calculation; // pass this to ResultComponent
    this.showResult=true;
  }
}
