import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../../models/Post";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-user-with-posts',
  templateUrl: './user-with-posts.component.html',
  styleUrls: ['./user-with-posts.component.css']
})
export class UserWithPostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value =>
      this.postService.getPosts(value['data'].id).subscribe(value => this.posts = value));
  }

}
