import {inject, TestBed} from '@angular/core/testing';

import {ViewContactService} from './view-contact.service';

describe('ViewContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewContactService]
    });
  });

  it('should be created', inject([ViewContactService], (service: ViewContactService) => {
    expect(service).toBeTruthy();
  }));

  it('should save the filter to localstorage', inject([ViewContactService], (service: ViewContactService) => {
    const filters = 'abc';
    service.saveFilter(filters);
    expect(JSON.parse(localStorage.getItem('contactInfo')).filters).toEqual(filters);
  }));

  it('should save the sortData to localstorage', inject([ViewContactService], (service: ViewContactService) => {
    const sortObj = {
      direction: 'asc',
      active: 'firstName'
    };
    service.saveSortData(sortObj);
    expect(JSON.parse(localStorage.getItem('contactInfo')).sort).toEqual(sortObj);
  }));
});
