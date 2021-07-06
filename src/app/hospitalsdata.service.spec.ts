import { TestBed } from '@angular/core/testing';

import { HospitalsdataService } from './hospitalsdata.service';

describe('HospitalsdataService', () => {
  let service: HospitalsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
