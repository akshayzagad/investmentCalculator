import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
export interface InvestmentResult {
  year: number;
  investedValue: number;
  interestEarned: number;
  totalInterest: number;
  investedCapital: number;
}
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  initialInvestment: number = 0;
  interest: number = 0;
  annualInvestment: number = 0;
  duration: number = 0;

  @Output() calculation = new EventEmitter<InvestmentResult[]>();

  calculateInvestmentResults() {
    let investmentValue = this.initialInvestment;
    const result = [];

    for (let i = 0; i < this.duration; i++) {
      const year = i + 1;

      const interestEarned = investmentValue * (this.interest / 100);

      investmentValue += interestEarned + this.annualInvestment;

      const totalInterest = investmentValue - this.initialInvestment - this.annualInvestment * year;

      result.push({
        year,
        investedValue: investmentValue,
        interestEarned,
        totalInterest,
        investedCapital: this.initialInvestment + this.annualInvestment * year,
      });
    }

    return result;
  }

  onSubmit() {
    this.calculation.emit(this.calculateInvestmentResults());
  }

  // Use the below code as a help
  // e.g., integrate it into a service or component
  // You may need to tweak it, depending on where and how you use it
}
