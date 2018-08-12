import {NgModule} from '@angular/core';
import {ViewContactComponent} from './component/view-contact.component';
import {MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';

@NgModule({
  imports: [MatTableModule, MatFormFieldModule, MatInputModule],
  exports: [ViewContactComponent],
  declarations: [ViewContactComponent]
})
export class ViewContactModule {
}
