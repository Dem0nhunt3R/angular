import { Component, OnInit } from '@angular/core';
import {IUser} from "../../interfaces";
import {UserService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {

  user:IUser;

  constructor(private userService:UserService, private activatedRoute:ActivatedRoute, private  router:Router) { }

  ngOnInit(): void {
    this.activatedRoute['params'].subscribe(params=>{
      this.userService.getUser(params['id']).subscribe(value => this.user=value)
    })
  }

  navToPosts(id: number) {
    console.log(id)
    this.router.navigate(['posts/'+id])
  }
}
