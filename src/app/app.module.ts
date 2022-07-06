import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressComponent } from './Components/address/address.component';
import { PersonComponent } from './Components/person/person.component';

import{HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonManagmentComponent } from './Components/person-managment/person-managment.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AddressManagmentComponent } from './Components/address-managment/address-managment.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    PersonComponent,
    PersonManagmentComponent,
    AddressManagmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
