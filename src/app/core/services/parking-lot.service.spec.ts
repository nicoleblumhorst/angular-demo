import { TestBed } from '@angular/core/testing';
import { ParkingLotService } from './parking-lot.service';
import { Car } from '../../shared/models/car.model';
import { Color } from '../../shared/enums/color.enum';

describe('ParkingLotService', () => {
  let service: ParkingLotService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [ParkingLotService]
    });

    service = TestBed.get(ParkingLotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create cars list on service creation', () => {
    expect(service.getCars()).toBeTruthy();
    expect(service.getCars().length).toBe(7);
  });

  it('#buyCar should add car to list', () => {
    const testCar = new Car(2010, 'Jeep', 'Cherokee', Color.Black);
    service.buyCar(testCar);
    expect(service.getCars()).toContain(testCar);
  });

  it('#sellCar should remove car from list', () => {
    const testCar = new Car(2010, 'Jeep', 'Cherokee', Color.Black);
    service.buyCar(testCar);
    expect(service.getCars()).toContain(testCar);

    service.sellCar(testCar);
    expect(service.getCars()).not.toContain(testCar);
  });
});
