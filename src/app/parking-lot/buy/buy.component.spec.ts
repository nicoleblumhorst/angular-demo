import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ParkingLotService } from '../../core/services/parking-lot.service';
import { BuyComponent } from './buy.component';
import { MaterialModule } from '../../shared/modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EnumPipe } from '../../shared/pipes/enum.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { BrandsService } from '../../core/services/brands.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BuyComponent', () => {
  let component: BuyComponent;
  let fixture: ComponentFixture<BuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuyComponent, EnumPipe],
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        BrandsService,
        { provide: ParkingLotService, useValue: jasmine.createSpyObj('ParkingLotService', ['getCars']) }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    spyOn(TestBed.get(BrandsService), 'getVehicleMakes').and.returnValue(of([]));
    expect(component).toBeTruthy();
  });
});
