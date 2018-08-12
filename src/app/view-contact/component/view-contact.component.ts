import {Component, OnInit} from '@angular/core';
import {ViewContactService} from '../service/view-contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'country', 'phone'];
  dataSource;

  constructor(private viewContactService: ViewContactService) {
  }

  ngOnInit() {
    this.dataSource = this.viewContactService.storeState.contactList;
  }

}
