import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/modules/material.module';
import { ParkingLotComponent } from './parking-lot/parking-lot.component';
import { BuyComponent } from './buy/buy.component';
import { SellDialogComponent } from './parking-lot/sell-dialog/sell-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EnumPipe } from '../shared/pipes/enum.pipe';

@NgModule({
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  declarations: [ParkingLotComponent, BuyComponent, SellDialogComponent, EnumPipe],
  exports: [ParkingLotComponent, BuyComponent],
  entryComponents: [SellDialogComponent]
})
export class ParkingLotModule {}
