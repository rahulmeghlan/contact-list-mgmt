import {Component, OnInit} from '@angular/core';
import {ViewContactService} from '../service/view-contact.service';
import {Sort} from '@angular/material';

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

  sortData(sort: Sort) {
    this.dataSource = this.dataSource.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.contact.id, b.contact.id, isAsc);
        case 'name':
          const aName = a.contact.firstName + a.contact.lastName;
          const bName = b.contact.firstName + b.contact.lastName;
          return compare(aName, bName, isAsc);
        case 'address':
          return compare(a.contact.address.street, b.contact.address.street, isAsc);
        case 'country':
          return compare(a.contact.address.country, b.contact.address.country, isAsc);
        case 'phone':
          return compare(a.contact.phone, b.contact.phone, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
