import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {Route, RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {PostComponent, PostDetailsComponent, PostsComponent} from "./components";

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {
    path: 'posts',
    component: PostsComponent,
    children: [{path: ':id', component: PostDetailsComponent}]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    PostDetailsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
