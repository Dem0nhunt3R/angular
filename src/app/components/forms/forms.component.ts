import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  users: IUser[] = [];
  user: IUser;
  user2: IUser;
  myForm: FormGroup;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      userId: new FormControl(1)
    })
    this.userService.getUsers().subscribe(value => this.users = value);
  }

  selectUser(tRef: HTMLFormElement) {
    this.userService.getUser(tRef['s-1'].value).subscribe(value => this.user = value);
  }

  selectUser2() {
    this.userService.getUser(this.myForm.value.userId).subscribe(value => this.user2 = value)
  }
}
