import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from '../model/product';
import {ProductsService} from '../service/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // class level scope....
  products:Array<Product> = [];
  searchText:string="";
  @ViewChild('searchQuery') searchTextViewChild:ElementRef;


  constructor(public productService : ProductsService) {

    console.log("Constructor called!!");

    // create new product object.....
    // add it to array.....

    // this.products.push(new Product("TV_1", 400))
    // this.products.push(new Product("TV_2", 500))
    this.products = [];
    this.products = this.productService.getProducts("");



  }

  ngOnInit() {
  }

  searchProducts(searchQuery:HTMLInputElement){
    console.log("This is local variable reference in angular:: ", searchQuery.value, this.searchTextViewChild.nativeElement.value);

    this.products = [];
    this.products = this.productService.getProducts(this.searchText);
    // another native way  of modifying DOM...
    // this.searchTextViewChild.nativeElement.value = "changed.....";


  }

  productDisplayed(product:Product){


    console.log("Product is been displayed successfully !!", product.name)

  }




}

