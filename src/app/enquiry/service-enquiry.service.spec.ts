import { TestBed } from '@angular/core/testing';

import { ServiceEnquiryService } from './service-enquiry.service';

describe('ServiceEnquiryService', () => {
  let service: ServiceEnquiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEnquiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
