import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddContactComponent} from './add-contact/add-contact.component';

const routes: Routes = [
  {path: 'add-contact', component: AddContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
