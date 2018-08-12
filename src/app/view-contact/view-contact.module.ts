import {NgModule} from '@angular/core';
import {ViewContactComponent} from './component/view-contact.component';
import {MatTableModule} from '@angular/material';

@NgModule({
  imports: [MatTableModule],
  exports: [ViewContactComponent],
  declarations: [ViewContactComponent]
})
export class ViewContactModule {
}
