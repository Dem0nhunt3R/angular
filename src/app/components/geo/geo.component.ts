import {Component, Input, OnInit} from '@angular/core';
import {IGeo} from "../../models/IGeo";

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.css']
})
export class GeoComponent implements OnInit {


  @Input()
  geo:IGeo;

  constructor() { }

  ngOnInit(): void {
  }

}
