import {Component, Input, OnInit} from '@angular/core';
import {Soap} from "../model/Soap";

@Component({
  selector: 'app-view-product-group',
  templateUrl: './view-product-group.component.html',
  styleUrls: ['./view-product-group.component.css']
})
export class ViewProductGroupComponent implements OnInit {

  @Input() products:Soap[] = new Array();
  @Input() displayStyle:String = "grid";
  // @Input("arg") products:Soap[] = new Array();

  constructor() {

    console.log("Inside view....")
  }

  ngOnInit() {

    console.log("Inside ngOnInit of view ....")
  }

}
