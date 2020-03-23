import { HTTP_INTERCEPTORS, HttpClient, HttpInterceptor } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LogInterceptor } from './log.interceptor';

describe(`LogInterceptor`, () => {
  const URL = '/url';

  let interceptor: LogInterceptor;
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true }]
    });
  });

  beforeEach(() => {
    TestBed.get(HTTP_INTERCEPTORS).forEach((interceptorInstance: HttpInterceptor) => {
      if (interceptorInstance instanceof LogInterceptor) {
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

  it('should log to the console', () => {
    console.log = jasmine.createSpy('log');

    http.get(URL).subscribe(response => {
      expect(response).toBeTruthy();
    });
    httpMock.expectOne(URL).flush({});

    expect(console.log).toHaveBeenCalledTimes(3);
    expect(console.log).toHaveBeenCalledWith(jasmine.stringMatching('Request URL: '));
    expect(console.log).toHaveBeenCalledWith(jasmine.stringMatching('Response: '));
    expect(console.log).toHaveBeenCalledWith(jasmine.stringMatching('Duration: '));
  });
});
