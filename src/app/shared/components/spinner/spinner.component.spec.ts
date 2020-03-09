import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerComponent } from './spinner.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { SpinnerService } from '../../../core/services/spinner.service';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatProgressSpinnerModule],
      declarations: [SpinnerComponent],
      providers: [SpinnerService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.get(SpinnerService).hide();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show spinner when SpinnerService returns true', () => {
    TestBed.get(SpinnerService).show();
    fixture.detectChanges();

    expect(component.isLoading).toBe(true);
    expect(fixture.nativeElement.querySelector('.spinner')).toBeTruthy();
  });

  it('should hide spinner when SpinnerService returns false', () => {
    TestBed.get(SpinnerService).hide();
    fixture.detectChanges();

    expect(component.isLoading).toBe(false);
    expect(fixture.nativeElement.querySelector('.spinner')).toBeFalsy();
  });
});
