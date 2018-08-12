import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AddContactModule} from './add-contact/add-contact.module';
import {ViewContactModule} from './view-contact/view-contact.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddContactModule,
    ViewContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
