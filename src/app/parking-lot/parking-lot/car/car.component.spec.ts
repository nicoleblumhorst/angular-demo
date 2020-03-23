import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarComponent } from './car.component';
import { Car } from '../../../shared/models/car.model';
import { Color } from '../../../shared/enums/color.enum';

describe('CarComponent', () => {
  let component: CarComponent;
  let fixture: ComponentFixture<CarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarComponent);
    component = fixture.componentInstance;
    component.car = new Car(2010, 'Jeep', 'Cherokee', Color.Black);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
