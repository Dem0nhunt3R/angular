import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private postsUrl = 'http://jsonplaceholder.typicode.com/posts?userId=';

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.usersUrl)
  }

  getPosts(id: number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.postsUrl + id);
  }
}
