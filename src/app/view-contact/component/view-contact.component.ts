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
  filter: string;

  constructor(private viewContactService: ViewContactService) {
    this.filter = '';
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
    const filter = this.viewContactService.storeState.filters && this.viewContactService.storeState.filters.filters;
    if (filter) {
      this.filter = filter;
      this.applyFilter(filter);
    }
  }

  applyFilter(filter: string) {
    this.dataSource = this.orgDataSource.filter((row) => {
      const pattern = new RegExp(filter, 'g');
      if (pattern.test(this.getConcatenatedRowString(row).toLowerCase())) {
        this.viewContactService.saveFilter(filter);
        return row;
      }
    });
  }

  getConcatenatedRowString(row) {
    let str = row.contact.id + row.contact.firstName + row.contact.lastName;
    str += row.contact.email + row.contact.phone + row.contact.address.city;
    str += row.contact.address.state + row.contact.address.pin + row.contact.address.country;
    return str;
  }

}
