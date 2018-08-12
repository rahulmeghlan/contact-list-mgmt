import {Injectable} from '@angular/core';
import {ContactService} from '../../contact.service';

@Injectable({
  providedIn: 'root'
})
export class ViewContactService extends ContactService {
  constructor() {
    super();
  }
}
