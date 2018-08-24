import {NgModule} from '@angular/core';
import {ViewContactComponent} from './component/view-contact.component';
import {MatFormFieldModule, MatInputModule, MatSnackBarModule, MatSortModule} from '@angular/material';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [MatSortModule, MatFormFieldModule, MatInputModule, CommonModule, MatSnackBarModule],
  exports: [ViewContactComponent],
  declarations: [ViewContactComponent]
})
export class ViewContactModule {
}
