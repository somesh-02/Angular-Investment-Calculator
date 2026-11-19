import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';

import { InvestmentService } from '../app/investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // @Input() results?: {

  private investmentService = inject(InvestmentService);

  // get results() {
  //   return this.investmentService.resultsData();
  // }

  results = computed(() => this.investmentService.resultsData());
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];

  // results = input<
  //   {
  //     year: number;
  //     interest: number;
  //     valueEndOfYear: number;
  //     annualInvestment: number;
  //     totalInterest: number;
  //     totalAmountInvested: number;
  //   }[]
  // >();
}
