import { TestBed } from '@angular/core/testing';

import { SubjecttestService } from './subjecttest.service';

describe('SubjecttestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubjecttestService = TestBed.get(SubjecttestService);
    expect(service).toBeTruthy();
  });
});
