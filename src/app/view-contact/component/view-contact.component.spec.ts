import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewContactComponent} from './view-contact.component';
import {MatFormFieldModule, MatInputModule, MatSnackBarModule, MatSortModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddContactComponent} from '../../add-contact/component/add-contact.component';
import {AddContactModule} from '../../add-contact/add-contact.module';


describe('ViewContactComponent', () => {
  let component: ViewContactComponent;
  let fixture: ComponentFixture<ViewContactComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const contact = {
    id: 'xxx',
    firstName: 'xxx',
    lastName: 'xxx',
    email: 'xxx',
    phone: 'xxx',
    address: {
      city: 'xxx',
      state: 'xxx',
      pin: 'xxx',
      country: 'xxx'
    }
  };
  const contactInfo = {contactList: contact, filters: '', sort: {}};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatSortModule, MatFormFieldModule, MatInputModule, CommonModule,
        MatSnackBarModule, BrowserAnimationsModule, AddContactModule,
        RouterTestingModule.withRoutes([
          {path: 'add-contact', component: AddContactComponent}])],
      declarations: [ViewContactComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component.router, 'navigate').and.returnValue(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('init filter to empty string', () => {
    expect(component.filter).toBe('');
  });

  it('getConcatenatedRowString -> should generate a string concatenating keys of Address Object', () => {
    expect(component.getConcatenatedRowString(contactInfo.contactList)).toEqual('xxxxxxxxxxxxxxxxxxxxxxxxxxx');
  });

  it('sortDataSource should sort the dataSource bases active field', () => {
    component.dataSource = [{
      'id': 'jl8aflvg',
      'firstName': 'abc',
      'lastName': 'def',
      'email': 'abc@gmail.com',
      'phone': '12313',
      'address': {'street': 'sdad', 'city': '', 'state': '', 'pin': '', 'country': 'Germany'}
    }, {
      'id': 'jlbqwkbm',
      'firstName': 'ghi',
      'lastName': 'jkl',
      'email': 'ghi@gmail.com',
      'phone': '1223123',
      'address': {'street': '', 'city': '', 'state': '', 'pin': '', 'country': 'Germany'}
    }];
    const sorted = [{
      'id': 'jlbqwkbm',
      'firstName': 'ghi',
      'lastName': 'jkl',
      'email': 'ghi@gmail.com',
      'phone': '1223123',
      'address': {'street': '', 'city': '', 'state': '', 'pin': '', 'country': 'Germany'}
    }, {
      'id': 'jl8aflvg',
      'firstName': 'abc',
      'lastName': 'def',
      'email': 'abc@gmail.com',
      'phone': '12313',
      'address': {'street': 'sdad', 'city': '', 'state': '', 'pin': '', 'country': 'Germany'}
    }];
    component.sortDataSource('desc', 'name');
    expect(component.dataSource).toEqual(sorted);
  });
});
