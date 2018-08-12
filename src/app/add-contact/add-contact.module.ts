import {NgModule} from '@angular/core';
import {AddContactComponent} from './component/add-contact.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    MatFormFieldModule, MatInputModule, MatButtonModule,
    FormsModule, ReactiveFormsModule, CommonModule],
  declarations: [AddContactComponent],
  exports: [AddContactComponent]
})
export class AddContactModule {
}
