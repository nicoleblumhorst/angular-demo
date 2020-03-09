import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LotComponent } from './pages/lot/lot.component';
import { BuyComponent } from './pages/buy/buy.component';
import { ToolsComponent } from './pages/tools/tools.component';

const routes: Routes = [
  { path: '', redirectTo: '/parking-lot', pathMatch: 'full' },
  { path: 'buy-a-car', component: BuyComponent },
  { path: 'parking-lot', component: LotComponent },
  { path: 'tools', component: ToolsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
