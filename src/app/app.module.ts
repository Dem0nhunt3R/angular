import {Route, RouterModule} from "@angular/router";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {FormsComponent, HomeComponent} from "./components";


const routes: Route[] = [{path: '', component: HomeComponent}]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
