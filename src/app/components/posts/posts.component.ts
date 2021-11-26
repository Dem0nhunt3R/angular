import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../models/IPost";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input()
  userId: number;

  @Input()
  posts: IPost[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getPosts(this.userId).subscribe(value => this.posts = value);
  }

}
