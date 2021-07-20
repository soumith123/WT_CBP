import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalsdataComponent } from './hospitalsdata.component';

describe('HospitalsdataComponent', () => {
  let component: HospitalsdataComponent;
  let fixture: ComponentFixture<HospitalsdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalsdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
