import { TestBed } from '@angular/core/testing';

import { CurrencyapidataServiceService } from './currencyapidata-service.service';

describe('CurrencyapidataServiceService', () => {
  let service: CurrencyapidataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyapidataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
