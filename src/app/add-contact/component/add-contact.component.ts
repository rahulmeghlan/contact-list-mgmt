import { Component, OnInit } from '@angular/core';
import {AddContactService} from '../service/add-contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  constructor(private addContactService: AddContactService) { }

  ngOnInit() {
  }

}
