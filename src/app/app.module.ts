import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { AddressComponent } from './components/address/address.component';
import { CompanyComponent } from './components/company/company.component';
import { GeoComponent } from './components/geo/geo.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    AddressComponent,
    CompanyComponent,
    GeoComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
