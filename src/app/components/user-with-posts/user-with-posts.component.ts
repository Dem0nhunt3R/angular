import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-with-posts',
  templateUrl: './user-with-posts.component.html',
  styleUrls: ['./user-with-posts.component.css']
})
export class UserWithPostsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private router:Router) {
  }

  ngOnInit(): void {
  }

}
