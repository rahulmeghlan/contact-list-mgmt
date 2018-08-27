import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {saveContact} from 'humanitec-store';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  contact: {};

  constructor(private router: Router) {
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

  save(form) {
    if (form.valid) {
      saveContact(this.contact);
      this.router.navigate(['/view-contact']);
    }
  }

}
