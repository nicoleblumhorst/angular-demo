import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EnumPipe } from './shared/pipes/enum.pipe';
import { ParkingLotService } from './core/services/parking-lot.service';
import { BrandsService } from './core/services/brands.service';
import { LogInterceptor } from './core/interceptors/log.interceptor';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { SpinnerService } from './core/services/spinner.service';
import { SpinnerInterceptor } from './core/interceptors/spinner.interceptor';
import { ToolsModule } from './tools/tools.module';
import { ParkingLotModule } from './parking-lot/parking-lot.module';
import { MaterialModule } from './shared/modules/material.module';

@NgModule({
  declarations: [AppComponent, SpinnerComponent],
  imports: [
    ToolsModule,
    ParkingLotModule,
    MaterialModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    SpinnerService,
    { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
