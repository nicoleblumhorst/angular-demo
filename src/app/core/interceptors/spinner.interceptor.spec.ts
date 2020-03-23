import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpInterceptor } from '@angular/common/http';
import { SpinnerService } from '../services/spinner.service';
import { SpinnerInterceptor } from './spinner.interceptor';

describe(`SpinnerInterceptor`, () => {
  const URL = '/url';

  let interceptor: SpinnerInterceptor;
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: SpinnerService,
          useValue: jasmine.createSpyObj('SpinnerService', ['show', 'hide'])
        },
        { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
      ]
    });
  });

  beforeEach(() => {
    TestBed.get(HTTP_INTERCEPTORS).forEach((interceptorInstance: HttpInterceptor) => {
      if (interceptorInstance instanceof SpinnerInterceptor) {
        interceptor = interceptorInstance;
      }
    });

    httpMock = TestBed.get(HttpTestingController);
    http = TestBed.get(HttpClient);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(interceptor).toBeDefined();
  });

  it('should show and hide spinner service', () => {
    http.get(URL).subscribe(response => {
      expect(response).toBeTruthy();
    });

    expect(TestBed.get(SpinnerService).show).toHaveBeenCalled();

    httpMock.expectOne(URL).flush({});

    expect(TestBed.get(SpinnerService).hide).toHaveBeenCalled();
  });
});
