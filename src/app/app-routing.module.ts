import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkingLotComponent } from './parking-lot/parking-lot/parking-lot.component';
import { BuyComponent } from './parking-lot/buy/buy.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  { path: '', redirectTo: '/parking-lot', pathMatch: 'full' },
  { path: 'buy-a-car', component: BuyComponent },
  { path: 'parking-lot', component: ParkingLotComponent },
  { path: 'tools', component: ToolsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
