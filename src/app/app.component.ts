import { Component, signal } from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { InvestmentResultsComponent as AppInvestmentResultsComponent } from '../investment-results/investment-results.component';
import { UserInputComponent } from '../user-input/user-input.component';
import type { InvestmentInput } from './investment-input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, AppInvestmentResultsComponent],
})
export class AppComponent {
  // resultsData?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];
  // resultsData = signal<
  //   | {
  //       year: number;
  //       interest: number;
  //       valueEndOfYear: number;
  //       annualInvestment: number;
  //       totalInterest: number;
  //       totalAmountInvested: number;
  //     }[]
  //   | undefined
  // >(undefined);
}
