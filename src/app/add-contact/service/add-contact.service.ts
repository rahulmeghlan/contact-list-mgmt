import {Injectable} from '@angular/core';
import store from 'humanitec-store';
import {ADD_CONTACT, addContact} from 'humanitec-store/actions/add.action';

@Injectable({
  providedIn: 'root'
})
export class AddContactService {
  store;
  unsubscribe;

  constructor() {
    this.store = store;
    console.log('>>>>>>', this.store.getState());
    this.subScribeStateUpdates();
  }

  saveContact(contact) {
    this.store.dispatch(addContact({
      type: ADD_CONTACT,
      contact
    }));
  }

  subScribeStateUpdates() {
    this.unsubscribe = this.store.subscribe(() => {
      console.log('Subscriber: ', this.store.getState());
    });
  }


}
