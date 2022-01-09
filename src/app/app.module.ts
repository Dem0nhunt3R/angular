import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Route, RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {FormsComponent, HomeComponent, UserDetailsComponent} from "./components";

const routes: Route[] = [
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    HomeComponent,
    UserDetailsComponent,
    FormsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
