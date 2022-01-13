import {Route, RouterModule} from "@angular/router";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {UserResolveService} from "./services";
import {FormComponent, HomeComponent, PostsComponent, UserDetailsComponent} from "./components";
import { PostComponent } from './components/post/post.component';


const routes: Route[] = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: 'users/:id', component: UserDetailsComponent,children:[
          {path:'posts', component:PostsComponent}
        ], resolve: {data: UserResolveService}
      },
      {path: 'posts/:id', component: PostsComponent}
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    UserDetailsComponent,
    PostsComponent,
    PostComponent,
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
