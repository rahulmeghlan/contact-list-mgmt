import store from 'humanitec-store';

export class ContactService {
  store;
  unsubscribe;
  storeState;

  constructor() {
    this.store = store;
    this.updateContactInfo();
    this.subScribeStateUpdates();
  }

  updateContactInfo() {
    this.storeState = this.store.getState();
    localStorage.setItem('contactInfo', JSON.stringify(this.storeState));
  }

  subScribeStateUpdates() {
    this.unsubscribe = this.store.subscribe(() => {
      this.updateContactInfo();
    });
  }
}
