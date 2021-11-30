import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-with-posts',
  templateUrl: './user-with-posts.component.html',
  styleUrls: ['./user-with-posts.component.css']
})
export class UserWithPostsComponent implements OnInit {

  @Input()
  user:User;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

  }

}
