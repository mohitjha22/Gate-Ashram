import { TestBed } from '@angular/core/testing';

import { YeartestService } from './yeartest.service';

describe('YeartestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YeartestService = TestBed.get(YeartestService);
    expect(service).toBeTruthy();
  });
});
