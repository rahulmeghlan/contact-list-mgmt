import { TestBed, inject } from '@angular/core/testing';

import { ViewContactService } from './view-contact.service';

describe('ViewContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewContactService]
    });
  });

  it('should be created', inject([ViewContactService], (service: ViewContactService) => {
    expect(service).toBeTruthy();
  }));
});
