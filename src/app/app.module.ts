import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserWithPostsComponent} from './components/user-with-posts/user-with-posts.component';
import { PostComponent } from './components/post/post.component';
import {UserResolveService} from "./services/user-resolve.service";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserWithPostsComponent,
    PostComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: UsersComponent,
        children:[
          {
            path:':id/user-with-posts',
            component:UserWithPostsComponent,
            resolve:{data:UserResolveService}
          }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
