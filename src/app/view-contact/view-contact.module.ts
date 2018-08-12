import {NgModule} from '@angular/core';
import {ViewContactComponent} from './component/view-contact.component';
import {MatFormFieldModule, MatInputModule, MatSortModule} from '@angular/material';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [MatSortModule, MatFormFieldModule, MatInputModule, CommonModule],
  exports: [ViewContactComponent],
  declarations: [ViewContactComponent]
})
export class ViewContactModule {
}
