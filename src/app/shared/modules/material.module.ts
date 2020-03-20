import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule, MatGridListModule,
  MatInputModule, MatListModule, MatProgressSpinnerModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatListModule
  ]
})
export class MaterialModule {}
