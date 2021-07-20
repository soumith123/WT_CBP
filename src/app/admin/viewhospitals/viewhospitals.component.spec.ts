import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhospitalsComponent } from './viewhospitals.component';

describe('ViewhospitalsComponent', () => {
  let component: ViewhospitalsComponent;
  let fixture: ComponentFixture<ViewhospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewhospitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewhospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
