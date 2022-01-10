import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

import {IUser} from "../../interfaces";
import {UserService} from "../../services";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  users: IUser[] = [];
  myForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({userId: new FormControl(1)})

    this.userService.getUsers().subscribe(value => this.users = value);
  }

  navToDetails() {
    this.router.navigate(['users/' + this.myForm.value.userId])
  }
}
