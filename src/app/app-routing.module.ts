import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/parking-lot', pathMatch: 'full' },
  {
    path: 'parking-lot',
    loadChildren: './parking-lot/parking-lot.module#ParkingLotModule'
  },
  {
    path: 'tools',
    loadChildren: './tools/tools.module#ToolsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
