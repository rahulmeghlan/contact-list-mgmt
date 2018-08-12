import {Component, OnDestroy} from '@angular/core';
import {AddContactService} from '../service/add-contact.service';
import {FormControl, Validators} from '@angular/forms';
import {Contact} from '../../contact';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnDestroy {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  contact: Contact;

  constructor(private addContactService: AddContactService, private router: Router) {
    this.contact = {
      id: Date.now().toString(36),
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: {
        street: '',
        city: '',
        state: '',
        pin: '',
        country: ''
      }
    };
  }

  ngOnDestroy() {
    this.addContactService.unsubscribe();
  }

  save() {
    this.addContactService.saveContact(this.contact);
    this.router.navigate(['/view-contact']);
  }

}
