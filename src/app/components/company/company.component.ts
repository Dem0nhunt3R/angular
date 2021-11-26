import {Component, Input, OnInit} from '@angular/core';
import {ICompany} from "../../models/ICompany";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  @Input()
  company:ICompany;

  constructor() { }

  ngOnInit(): void {
  }

}
