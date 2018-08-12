import {Component, OnInit} from '@angular/core';
import {AddContactService} from '../service/add-contact.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private addContactService: AddContactService) {
  }

  ngOnInit() {
  }

}
