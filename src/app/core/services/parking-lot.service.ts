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
    this.cars.push(new Car(2019, 'JEEP', 'Cherokee', Color.Black));
    this.cars.push(new Car(2017, 'HONDA', 'Accord', Color.Blue));
    this.cars.push(new Car(2020, 'FORD', 'Explorer', Color.Yellow));
    this.cars.push(new Car(2016, 'CHEVROLET', 'Silverado', Color.White));
    this.cars.push(new Car(2018, 'AUDI', 'A4', Color.Silver));
    this.cars.push(new Car(2005, 'TOYOTA', 'Prius', Color.Red));
    this.cars.push(new Car(2019, 'JEEP', 'Gladiator', Color.Green));
  }
}
