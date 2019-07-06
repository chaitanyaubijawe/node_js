import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  mobile:String="";
  name:String="";

  product:Product = new Product("asd",5,"asdad");
  constructor() { }

  ngOnInit() {
  }

  postData(){

    alert("hi there.." + this.name);
  }

}
