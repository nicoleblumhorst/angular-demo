import { Color } from '../enums/color.enum';

export class Car {
  year: number;
  make: string;
  model: string;
  color: Color;

  constructor(year: number, make: string, model: string, color: Color) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.color = color;
  }
}
