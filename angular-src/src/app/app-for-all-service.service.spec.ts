import { TestBed, inject } from '@angular/core/testing';

import { AppForAllServiceService } from './app-for-all-service.service';

describe('AppForAllServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppForAllServiceService]
    });
  });

  it('should be created', inject([AppForAllServiceService], (service: AppForAllServiceService) => {
    expect(service).toBeTruthy();
  }));
});
