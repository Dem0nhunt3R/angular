import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {UserResolveService} from "./services/user-resolve.service";
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostResolveService} from "./services/post-resolve.service";
import {PostDetailsComponent} from './components/post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    UserDetailsComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: UsersComponent,
        children: [
          {
            path: ':id',
            component: UserDetailsComponent,
            resolve: {data: UserResolveService}
          }
        ]

      },
      {
        path: 'posts',
        component: PostsComponent,
        children:[
          {
            path:':id',
            component: PostDetailsComponent,
            resolve: {data:PostResolveService}
          }
        ]
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
