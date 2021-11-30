import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserWithPostsComponent} from './components/user-with-posts/user-with-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserWithPostsComponent,

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
            path: 'user-with-posts',
            component: UserWithPostsComponent
          }
        ]
      }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
