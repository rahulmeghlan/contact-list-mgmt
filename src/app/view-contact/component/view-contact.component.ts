import {Component, OnInit} from '@angular/core';
import {ViewContactService} from '../service/view-contact.service';
import {Sort} from '@angular/material';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {
  dataSource: any[];
  orgDataSource: any[];
  filter: string;

  constructor(private viewContactService: ViewContactService) {
    this.filter = '';
  }

  ngOnInit() {
    this.initDataSource();
    this.initFilterOnDataSource();
    this.initSortOnDataSource();
  }

  initDataSource() {
    this.dataSource = this.viewContactService.storeState.contactList;
    this.orgDataSource = this.dataSource.slice();
  }

  initFilterOnDataSource() {
    const filter = this.viewContactService.storeState.filters;
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
    let str = row.id + row.firstName + row.lastName;
    str += row.email + row.phone + row.address.city;
    str += row.address.state + row.address.pin + row.address.country;
    return str;
  }

  applySort(sort: Sort) {
    this.viewContactService.saveSortData({
      direction: sort.direction,
      active: sort.active
    });
    this.sortDataSource(sort.direction, sort.active);
  }

  sortDataSource(direction, active) {
    this.dataSource = this.dataSource.sort((a, b) => {
      const isAsc = direction === 'asc';
      switch (active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'name':
          const aName = a.firstName + a.lastName;
          const bName = b.firstName + b.lastName;
          return compare(aName, bName, isAsc);
        case 'address':
          return compare(a.address.street, b.address.street, isAsc);
        case 'country':
          return compare(a.address.country, b.address.country, isAsc);
        case 'phone':
          return compare(a.phone, b.phone, isAsc);
        default:
          return 0;
      }
    });
  }

  initSortOnDataSource() {
    const sort = this.viewContactService.storeState.sort;
    if (sort.direction) {
      this.sortDataSource(sort.direction, sort.active);
    }
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
