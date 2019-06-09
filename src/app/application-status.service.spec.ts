import { TestBed } from '@angular/core/testing';

import { ApplicationStatusService } from './application-status.service';

describe('ApplicationStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationStatusService = TestBed.get(ApplicationStatusService);
    expect(service).toBeTruthy();
  });
});
