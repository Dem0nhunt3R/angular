import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services";
import {ActivatedRoute} from "@angular/router";
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[] = [];

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute['params'].subscribe(params => {
      this.postService.getPosts(+params['id']).subscribe(value => this.posts = value)
    })
  }
}
