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

});
