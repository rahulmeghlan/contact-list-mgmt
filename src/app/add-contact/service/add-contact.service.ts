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
    console.log('>>>>>>', this.store.getState());
  }


}
