import {Component} from '@angular/core';
import {AddContactService} from '../service/add-contact.service';
import {FormControl, Validators} from '@angular/forms';
import {Contact} from '../Contact/contact';
import {Router} from '@angular/router';
import {Address} from '../Contact/Address';

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
  contact: Contact;

  constructor(private addContactService: AddContactService, private router: Router) {
    this.contact = new Contact(Date.now().toString(36),
      '',
      '',
      '',
      '',
      new Address('', '', '', '', ''));
  }

  save(form) {
    if (form.valid) {
      this.addContactService.saveContact(this.contact);
      this.router.navigate(['/view-contact']);
    }
  }

}
