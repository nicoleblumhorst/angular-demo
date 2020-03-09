import { TestBed } from '@angular/core/testing';
import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [SpinnerService]
    });

    service = TestBed.get(SpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default counter to 0', () => {
    expect(service.getCounter()).toBe(0);
  });

  it('#show should emit event', () => {
    spyOn(service.isLoading, 'emit');

    service.show();

    expect(service.isLoading.emit).toHaveBeenCalledWith(true);
  });

  it('#show should emit event only once', () => {
    spyOn(service.isLoading, 'emit');

    service.show();
    service.show();
    service.show();

    expect(service.isLoading.emit).toHaveBeenCalledTimes(1);
  });

  it('#hide should emit event', () => {
    spyOn(service.isLoading, 'emit');

    service.show();
    service.hide();

    expect(service.isLoading.emit).toHaveBeenCalledWith(false);
  });

  it('#hide should emit event only when counter is 0', () => {
    spyOn(service.isLoading, 'emit');

    service.show();
    service.show();
    service.hide();

    expect(service.isLoading.emit).not.toHaveBeenCalledWith(false);

    service.hide();

    expect(service.isLoading.emit).toHaveBeenCalledWith(false);
  });
});
