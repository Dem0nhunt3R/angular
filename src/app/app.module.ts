import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Route, RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {HomeComponent, PostComponent, PostDetailsComponent, PostsComponent} from './components';
import {PostResolveService} from "./services";

const routes: Route[] = [
  {path: "", component: HomeComponent},
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      {
        path: ':id',
        component: PostDetailsComponent,
        resolve: {data: PostResolveService}
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    HomeComponent
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
