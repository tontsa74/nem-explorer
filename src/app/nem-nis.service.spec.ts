import { TestBed } from '@angular/core/testing';

import { NemNisService } from './nem-nis.service';

describe('NemNisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NemNisService = TestBed.get(NemNisService);
    expect(service).toBeTruthy();
  });
});
