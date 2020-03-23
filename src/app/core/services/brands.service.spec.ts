import { TestBed } from '@angular/core/testing';
import { BrandsService } from './brands.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BrandsService', () => {
  let service: BrandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [BrandsService]
    });

    service = TestBed.get(BrandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
