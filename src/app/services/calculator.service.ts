import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

   public message: string;

  constructor() { }

getResistance(firstdigit, seconddigit, thirddigit, multiplier, tolerance){
 if (multiplier === "1m") {
  this.message = firstdigit + seconddigit + thirddigit + "M" + " +/- " + tolerance;
  }
  if (multiplier ==="10m") {
    this.message = firstdigit + seconddigit + thirddigit + "0M" + " +/- " + tolerance;
  }
  if (multiplier === "100m") {
     this.message = firstdigit + seconddigit + thirddigit + "00M" + " +/- " + tolerance;
  }
  if (multiplier === "1g") {
    this.message = firstdigit + seconddigit + thirddigit + "G" + " +/- " + tolerance;
  }
  if (multiplier === "1k") {
    this.message = firstdigit + seconddigit + thirddigit + "K" + " +/- " + tolerance;
  }
  if (multiplier === "10k") {
    this.message = firstdigit + seconddigit + thirddigit + "0K" + " +/- " + tolerance;
  }
  if (multiplier === "100k") {
    this.message = firstdigit + seconddigit + thirddigit + "00K" + " +/- " + tolerance;
  }
  if (multiplier === 1) {
    this.message = firstdigit + seconddigit + thirddigit + " " + " +/- " + tolerance;
  }
  if (multiplier === 10) {
    this.message = firstdigit + seconddigit + thirddigit + "0 " + " +/- " + tolerance;
  }
  if (multiplier === 100) {
    this.message = firstdigit + seconddigit + thirddigit + "00 " + " +/- " + tolerance;
  }
  return this.message;
}

}
