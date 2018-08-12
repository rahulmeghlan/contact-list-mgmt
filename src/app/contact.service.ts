import store from 'humanitec-store';
import {addContact} from 'humanitec-store/actions/add.action';

export class ContactService {
  store;
  unsubscribe;
  contactList;

  constructor() {
    this.store = store;
    this.updateContactInfo();
    this.subScribeStateUpdates();
  }

  initContactInfo() {
  }


  updateContactInfo() {
    const storeState = this.store.getState();
    this.contactList = storeState.contactList;
    localStorage.setItem('contactInfo', JSON.stringify(storeState));
  }

  subScribeStateUpdates() {
    this.unsubscribe = this.store.subscribe(() => {
      this.updateContactInfo();
    });
  }
}
