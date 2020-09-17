import { TestBed } from '@angular/core/testing';

import { CanProceedToDetailedGuard } from './can-proceed-to-detailed.guard';

describe('CanProceedToDetailedGuard', () => {
  let guard: CanProceedToDetailedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanProceedToDetailedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
