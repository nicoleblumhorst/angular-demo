import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Car } from '../../shared/models/car.model';
import { Color } from '../../shared/enums/color.enum';
import { ParkingLotService } from 'src/app/core/services/parking-lot.service';
import { SellDialogComponent } from 'src/app/parking-lot/parking-lot/sell-dialog/sell-dialog.component';

@Component({
  selector: 'app-parkinglot',
  templateUrl: './parking-lot.component.html',
  styleUrls: ['./parking-lot.component.scss']
})
export class ParkingLotComponent implements OnInit {
  readonly Color = Color;
  cars: Car[];

  constructor(public dialog: MatDialog, public parkingLotService: ParkingLotService) {}

  ngOnInit() {
    this.cars = this.parkingLotService.getCars();
  }

  viewCarDetails(car) {
    const dialogRef = this.dialog.open(SellDialogComponent, {
      width: '400px',
      data: { car }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.parkingLotService.sellCar(car);
      }
    });
  }
}
