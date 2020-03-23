import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ParkingLotComponent } from './parking-lot.component';
import { ParkingLotService } from '../../core/services/parking-lot.service';
import { MaterialModule } from '../../shared/modules/material.module';
import { SellDialogComponent } from './sell-dialog/sell-dialog.component';
import { CarComponent } from './car/car.component';

describe('ParkingLotComponent', () => {
  let component: ParkingLotComponent;
  let fixture: ComponentFixture<ParkingLotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParkingLotComponent, SellDialogComponent, CarComponent],
      imports: [MaterialModule],
      providers: [{ provide: ParkingLotService, useValue: jasmine.createSpyObj('ParkingLotService', ['getCars']) }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
