import { TestBed } from '@angular/core/testing';

import { TopictestService } from './topictest.service';

describe('TopictestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopictestService = TestBed.get(TopictestService);
    expect(service).toBeTruthy();
  });
});
