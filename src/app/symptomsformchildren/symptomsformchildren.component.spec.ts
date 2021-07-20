import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomsformchildrenComponent } from './symptomsformchildren.component';

describe('SymptomsformchildrenComponent', () => {
  let component: SymptomsformchildrenComponent;
  let fixture: ComponentFixture<SymptomsformchildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymptomsformchildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomsformchildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
