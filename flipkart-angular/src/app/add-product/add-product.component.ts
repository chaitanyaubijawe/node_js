import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';



@Component({
  selector: 'app-add-product',
  // selector: '[app-add-product]',
  // selector: '.app-add-product',
  templateUrl: './add-product.component.html',
  //template: `<h3> This is add product page...</h3>`,
  styleUrls: ['./add-product.component.css']
  // styles:[`h3{
  // color: blueviolet;
  // }`]
})
export class AddProductComponent implements OnInit {

  stringInterpolation:string = "String property binding example";
  shouldEnable:boolean = true; // this is property binding....
  biDirectional:string = "This is biderectional binding....";
  product = {};
  productTS:Product = new Product(null,null, null);
  constructor() {

    console.log("Inside constructor :: ")
  }

  ngOnInit() {

    console.log("Inside ngOnInit :: ")
  }


  onInputChange(event:any){

    //console.log(event.target.value);

    this.biDirectional = event.target.value;
  }

  addProduct(){

  console.log(JSON.stringify(this.productTS));

  }
}
