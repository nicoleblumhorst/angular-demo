import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsComponent } from './tools.component';
import { MaterialModule } from '../shared/modules/material.module';

describe('ToolsComponent', () => {
  let component: ToolsComponent;
  let fixture: ComponentFixture<ToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolsComponent],
      imports: [MaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
