import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AddContactModule} from './add-contact/add-contact.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
