import { TestBed } from '@angular/core/testing';

import { ApiBinanceService } from './api-binance.service';

describe('ApiBinanceService', () => {
  let service: ApiBinanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBinanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
