import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/modules/material.module';
import { ParkingLotComponent } from './parking-lot/parking-lot.component';
import { BuyComponent } from './buy/buy.component';
import { SellDialogComponent } from './parking-lot/sell-dialog/sell-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EnumPipe } from '../shared/pipes/enum.pipe';
import { parkingLotRouting } from './parking-lot.routing';
import { ParkingLotService } from '../core/services/parking-lot.service';
import { BrandsService } from '../core/services/brands.service';

@NgModule({
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, parkingLotRouting],
  declarations: [ParkingLotComponent, BuyComponent, SellDialogComponent, EnumPipe],
  exports: [ParkingLotComponent, BuyComponent],
  providers: [ParkingLotService, BrandsService],
  entryComponents: [SellDialogComponent]
})
export class ParkingLotModule {}
