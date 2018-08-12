import {Injectable} from '@angular/core';
import store from 'humanitec-store';
import {addContact} from 'humanitec-store/actions/add.action';

@Injectable({
  providedIn: 'root'
})
export class AddContactService {
  store;

  constructor() {
    this.store = store;
    this.store.dispatch(addContact({
      firstName: 'Rahul',
      lastName: 'Meghlan'
    }));
    console.log('>>>>>>', this.store.getState());
  }


}
