import {Route, RouterModule} from "@angular/router";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {FormComponent, HomeComponent, UserDetailsComponent} from "./components";
import {UserResolveService} from "./services";


const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'users/:id', component: UserDetailsComponent, resolve: {data: UserResolveService}}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
