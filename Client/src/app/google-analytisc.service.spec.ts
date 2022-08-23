import { TestBed } from '@angular/core/testing';

import { GoogleAnalytiscService } from './google-analytisc.service';

describe('GoogleAnalytiscService', () => {
  let service: GoogleAnalytiscService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleAnalytiscService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
