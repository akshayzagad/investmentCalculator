import { Component, Input } from '@angular/core';
import { required } from '@angular/forms/signals';
import {CommonModule } from '@angular/common';
export interface InvestmentResult {
  year: number;
  investedValue: number;
  interestEarned: number;
  totalInterest: number;
  investedCapital: number;
}
@Component({
  selector: 'app-result',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './result.html',
  styleUrl: './result.css',
})
export class Result {
  @Input({required:true}) calculation!:InvestmentResult[];
}
