import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Color } from '../../shared/enums/color.enum';
import { Router } from '@angular/router';
import { ParkingLotService } from 'src/app/core/services/parking-lot.service';
import { BrandsService } from 'src/app/core/services/brands.service';
import { Brand } from '../../shared/models/brand.model';
import { Car } from '../../shared/models/car.model';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {
  readonly Color = Color;

  makes: Brand[];
  models: string[];
  newCar = new FormGroup({
    year: new FormControl(2020, [Validators.required, Validators.min(1950), Validators.max(2021)]),
    make: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    color: new FormControl('Black')
  });

  constructor(
    public router: Router,
    private parkingLotService: ParkingLotService,
    private vehicleService: BrandsService
  ) {}

  ngOnInit(): void {
    this.vehicleService.getVehicleMakes().subscribe(
      data => {
        this.makes = data;
        this.newCar.controls.make.setValue(data[0]);
        this.onMakeSelected(data[0]);
      },
      error => {
        console.error(error);
      },
      () => {
        console.log('service finished');
      }
    );
  }

  onSubmit(newCar) {
    this.parkingLotService.buyCar(new Car(newCar.year, newCar.make.name, newCar.model, newCar.color));
    this.router.navigateByUrl('/parking-lot');
  }

  onMakeSelected(make) {
    this.models = make.models;
    this.newCar.controls.model.setValue(this.models[0]);
  }
}
