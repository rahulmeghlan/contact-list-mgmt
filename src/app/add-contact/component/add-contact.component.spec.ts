import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddContactComponent} from './add-contact.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatLabel} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AddContactComponent', () => {
  let component: AddContactComponent;
  let fixture: ComponentFixture<AddContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule, MatInputModule, MatButtonModule,
        FormsModule, ReactiveFormsModule, CommonModule, RouterTestingModule, BrowserAnimationsModule],
      declarations: [AddContactComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
