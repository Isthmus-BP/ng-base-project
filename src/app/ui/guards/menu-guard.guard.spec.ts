import { TestBed, async, inject } from '@angular/core/testing';

import { MenuGuardGuard } from './menu-guard.guard';

describe('MenuGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuGuardGuard]
    });
  });

  it('should ...', inject([MenuGuardGuard], (guard: MenuGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
