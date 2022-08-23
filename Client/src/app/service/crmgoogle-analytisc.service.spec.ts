import { TestBed } from '@angular/core/testing';

import { CRMGoogleAnalytiscService } from './crmgoogle-analytisc.service';

describe('CRMGoogleAnalytiscService', () => {
  let service: CRMGoogleAnalytiscService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRMGoogleAnalytiscService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
