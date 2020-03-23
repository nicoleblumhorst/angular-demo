import { Injectable } from '@angular/core';
import { Color } from '../../shared/enums/color.enum';
import { Car } from '../../shared/models/car.model';

@Injectable({
  providedIn: 'root'
})
export class ParkingLotService {
  private cars: Car[];

  constructor() {
    this.cars = new Array();
    this.generateSomeCars();
  }

  buyCar(newCar: Car) {
    this.cars.push(newCar);
  }

  sellCar(car: Car) {
    const index = this.cars.indexOf(car);
    if (index >= 0) {
      this.cars.splice(index, 1);
    }
  }

  getCars(): Car[] {
    return this.cars;
  }

  private generateSomeCars() {
    this.cars.push(new Car(2019, 'JEEP', 'Cherokee', Color.Black, 1));
    this.cars.push(new Car(2017, 'HONDA', 'Accord', Color.Blue, 2));
    this.cars.push(new Car(2020, 'FORD', 'Explorer', Color.Yellow, 3));
    this.cars.push(new Car(2016, 'CHEVROLET', 'Silverado', Color.White, 4));
    this.cars.push(new Car(2018, 'AUDI', 'A4', Color.Silver, 5));
    this.cars.push(new Car(2005, 'TOYOTA', 'Prius', Color.Red, 7));
    this.cars.push(new Car(2019, 'JEEP', 'Gladiator', Color.Green, 6));
  }
}
