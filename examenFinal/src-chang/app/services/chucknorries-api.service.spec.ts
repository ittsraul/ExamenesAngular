import { TestBed } from '@angular/core/testing';

import { ChucknorriesApiService } from './chucknorries-api.service';

describe('ChucknorriesApiService', () => {
  let service: ChucknorriesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChucknorriesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
