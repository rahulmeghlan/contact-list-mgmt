import {Injectable} from '@angular/core';
import store from 'humanitec-store';
import {ADD_CONTACT, addContact} from 'humanitec-store/actions/add.action';

@Injectable({
  providedIn: 'root'
})
export class ViewContactService {
  store;
  unsubscribe;

  constructor() {
    this.store = store;
    console.log('>>>>>>', this.store.getState());
    this.subScribeStateUpdates();
  }

  subScribeStateUpdates() {
    this.unsubscribe = this.store.subscribe(() => {
      console.log('Subscriber View Contact: ', this.store.getState());
    });
  }
}
