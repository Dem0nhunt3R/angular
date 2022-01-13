import {Component, OnInit} from '@angular/core';
import {IUser} from "../../interfaces";
import {UserService} from "../../services";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  users: IUser[] = [];
  myForm: FormGroup;

  constructor(private userService: UserService, private router:Router, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({userId:new FormControl(1)});

    this.userService.getUsers().subscribe(value => this.users=value);
  }

  navToDetails() {
    console.log(this.myForm.value.userId)
    this.router.navigate([`users/${this.myForm.value.userId}`],
      {relativeTo:this.activatedRoute});
  }
}
