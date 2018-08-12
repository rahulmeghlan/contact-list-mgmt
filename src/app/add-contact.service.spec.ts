import { TestBed, inject } from '@angular/core/testing';

import { AddContactService } from './add-contact.service';

describe('AddContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddContactService]
    });
  });

  it('should be created', inject([AddContactService], (service: AddContactService) => {
    expect(service).toBeTruthy();
  }));
});
