import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LotComponent } from './pages/lot/lot.component';
import { BuyComponent } from './pages/buy/buy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {
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
} from '@angular/material';
import { EnumPipe } from './shared/pipes/enum.pipe';
import { ParkingLotService } from './core/services/parking-lot.service';
import { SellDialogComponent } from './pages/lot/sell-dialog/sell-dialog.component';
import { BrandsService } from './core/services/brands.service';
import { ToolsComponent } from './pages/tools/tools.component';
import { LogInterceptor } from './core/interceptors/log.interceptor';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { SpinnerService } from './core/services/spinner.service';
import { SpinnerInterceptor } from './core/interceptors/spinner.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LotComponent,
    BuyComponent,
    EnumPipe,
    SellDialogComponent,
    ToolsComponent,
    SpinnerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
  ],
  providers: [
    ParkingLotService,
    BrandsService,
    SpinnerService,
    { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
  ],
  entryComponents: [SellDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
