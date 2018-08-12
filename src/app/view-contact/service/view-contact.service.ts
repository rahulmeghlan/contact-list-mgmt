import {Injectable} from '@angular/core';
import {ContactService} from '../../contact.service';
import {applyFilter, FILTER_CONTACTS} from 'humanitec-store/actions/filter.action';

@Injectable({
  providedIn: 'root'
})
export class ViewContactService extends ContactService {
  constructor() {
    super();
  }

  saveFilter(filters) {
    this.store.dispatch(applyFilter({
      type: FILTER_CONTACTS,
      filters
    }));
  }
}
