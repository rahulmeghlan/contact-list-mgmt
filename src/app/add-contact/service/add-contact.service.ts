import {Injectable} from '@angular/core';
import {ADD_CONTACT, addContact} from 'humanitec-store/actions/add.action';
import {ContactService} from '../../contact.service';

@Injectable({
  providedIn: 'root'
})
export class AddContactService extends ContactService {
  constructor() {
    super();
  }

  saveContact(contact) {
    this.store.dispatch(addContact({
      type: ADD_CONTACT,
      contact
    }));
  }

}
