import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SellDialogComponent } from './sell-dialog.component';
import { MaterialModule } from '../../../shared/modules/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Car } from '../../../shared/models/car.model';
import { Color } from '../../../shared/enums/color.enum';

describe('SellDialogComponent', () => {
  let component: SellDialogComponent;
  let fixture: ComponentFixture<SellDialogComponent>;
  const testCar = new Car(2010, 'Jeep', 'Cherokee', Color.Black);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SellDialogComponent],
      imports: [MaterialModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { car: testCar } },
        { provide: MatDialogRef, useValue: jasmine.createSpyObj('MatDialogRef', ['close']) }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
