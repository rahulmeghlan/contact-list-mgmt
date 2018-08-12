import {Component, OnInit} from '@angular/core';
import {ViewContactService} from '../service/view-contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'country', 'phone'];
  dataSource: any[];
  orgDataSource: any[];

  constructor(private viewContactService: ViewContactService) {
  }

  ngOnInit() {
    this.initDataSource();
    this.initFilterOnDataSource();
  }

  initDataSource() {
    this.dataSource = this.viewContactService.storeState.contactList;
    this.orgDataSource = this.dataSource.slice();
  }

  initFilterOnDataSource() {
    const filter = this.viewContactService.storeState.filter;
    if (filter) {
      this.applyFilter(filter);
    }
  }

  applyFilter(filter: string) {
    if (filter) {
      this.dataSource = this.orgDataSource.filter((row) => {
        let str = row.contact.id + row.contact.firstName + row.contact.lastName;
        str += row.contact.email + row.contact.phone + row.contact.address.city;
        str += row.contact.address.state + row.contact.address.pin + row.contact.address.country;
        const pattern = new RegExp(filter, 'g');
        if (pattern.test(str.toLowerCase())) {
          this.viewContactService.saveFilter(filter);
          return row;
        }
      });
    }
  }

}
