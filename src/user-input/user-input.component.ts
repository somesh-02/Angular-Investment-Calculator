import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../app/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  //@Output() calculate = new EventEmitter<InvestmentInput>();
  //calculate = output<InvestmentInput>();

  constructor(private investmentService: InvestmentService) {}

  enteredInitialInvestment = signal('0');
  enteredAnnaulInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    // this.calculate.emit({
    //   initialInvestment: +this.enteredInitialInvestment(),
    //   duration: +this.enteredDuration(),
    //   expectedReturn: +this.enteredExpectedReturn(),
    //   annualInvestment: +this.enteredAnnaulInvestment(),
    // });

    this.investmentService.onCalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnaulInvestment(),
    });

    this.enteredInitialInvestment.set('0');
    this.enteredAnnaulInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
