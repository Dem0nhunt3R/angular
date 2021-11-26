import {Component, Input, OnInit} from '@angular/core';
import {IAddress} from "../../models/IAddress";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input()
  address:IAddress;

  constructor() { }

  ngOnInit(): void {
  }

}
