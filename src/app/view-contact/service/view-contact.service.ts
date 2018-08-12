import {Injectable} from '@angular/core';
import {ContactService} from '../../contact.service';
import {applyFilter, FILTER_CONTACTS} from 'humanitec-store/actions/filter.action';
import {SORT_CONTACTS, sortContacts} from 'humanitec-store/actions/sort.action';

@Injectable({
  providedIn: 'root'
})
export class ViewContactService extends ContactService {
  constructor() {
    super();
  }

  saveFilter(filters) {
    this.store.dispatch(applyFilter(filters));
  }

  saveSortData(sortObj) {
    this.store.dispatch(sortContacts(sortObj));
  }
}
