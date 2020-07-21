import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-resistor',
  templateUrl: './resistor.component.html',
  styleUrls: ['./resistor.component.css']
})
export class ResistorComponent implements OnInit {
   public message: string = " ";

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }

updateResistance(firstdigit, seconddigit, thirddigit, multiplier, tolerance) {
this.message = this.calculatorService.getResistance(firstdigit, seconddigit, thirddigit, multiplier, tolerance);
return;
}

}
