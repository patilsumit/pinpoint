import { TestBed } from '@angular/core/testing';

import { PinpointserviceService } from './pinpointservice.service';

describe('PinpointserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PinpointserviceService = TestBed.get(PinpointserviceService);
    expect(service).toBeTruthy();
  });
});
