import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhospitaldetailsComponent } from './viewhospitaldetails.component';

describe('ViewhospitaldetailsComponent', () => {
  let component: ViewhospitaldetailsComponent;
  let fixture: ComponentFixture<ViewhospitaldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewhospitaldetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewhospitaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
