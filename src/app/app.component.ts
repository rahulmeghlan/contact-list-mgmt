import {Component} from '@angular/core';
import {AddContactService} from './add-contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'humanitec-assignment';

  constructor(private addContactService: AddContactService) {
  }
}
