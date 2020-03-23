import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ParkingLotComponent } from './parking-lot/parking-lot.component';
import { BuyComponent } from './buy/buy.component';

export const routes: Routes = [
  { path: '', component: ParkingLotComponent },
  { path: 'parking-lot', component: ParkingLotComponent },
  { path: 'buy-a-car', component: BuyComponent }
];

export const parkingLotRouting: ModuleWithProviders = RouterModule.forChild(routes);
