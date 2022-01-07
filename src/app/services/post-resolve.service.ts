import {Observable} from "rxjs";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from '@angular/core';

import {PostService} from "./post.service";
import {IPost} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<IPost> {
  constructor(private postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost> | Promise<IPost> | IPost {
    return this.postService.getPost(+route.params['id']);
  }


}
