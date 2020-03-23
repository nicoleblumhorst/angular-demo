import { TestBed } from '@angular/core/testing';
import { BrandsService } from './brands.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BrandsService', () => {
  let service: BrandsService;
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [BrandsService]
    });

    service = TestBed.get(BrandsService);
    httpMock = TestBed.get(HttpTestingController);
    http = TestBed.get(HttpClient);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    service.getVehicleMakes().subscribe(response => {
      expect(response).toBeTruthy();
    });
    httpMock.expectOne('https://my-json-server.typicode.com/nicoleblumhorst/dummy-car-data/make').flush({});
  });
});
