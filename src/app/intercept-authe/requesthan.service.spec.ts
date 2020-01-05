import { TestBed } from '@angular/core/testing';

import { RequesthanService } from './requesthan.service';

describe('RequesthanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequesthanService = TestBed.get(RequesthanService);
    expect(service).toBeTruthy();
  });
});
