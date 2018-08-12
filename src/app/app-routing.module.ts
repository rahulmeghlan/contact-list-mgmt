import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddContactComponent} from './add-contact/component/add-contact.component';

const routes: Routes = [
  {path: 'add-contact', component: AddContactComponent},
  {path: '', redirectTo: '/view-contact', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
