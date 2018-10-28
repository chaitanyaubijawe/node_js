import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {Router} from '@angular/router';
import {ProductsService} from '../service/products.service';



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

  constructor(private router:Router, private productService:ProductsService) {

    console.log("Inside constructor :: ")
  }

  ngOnInit() {

    console.log("Inside ngOnInit :: ")
  }

  addProduct(){

    console.log(JSON.stringify(this.productTS));
    // send data to server....
    // redirect to dashboard..


    // this.productService.addProduct(this.productTS).subscribe((data)=>{
    //
    //     console.log("Product has been added successfully :: ", data);
    //     this.router.navigate([""]);
    //
    // }, (err)=>{
    //
    //
    // }, ()=> {
    //
    // });

    this.productService.addProduct(this.productTS).subscribe();

    this.router.navigate([""]);



  }
}
