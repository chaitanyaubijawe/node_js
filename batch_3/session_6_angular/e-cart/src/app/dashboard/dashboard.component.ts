import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  product:Product = new Product("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/IPhone_5.png/200px-IPhone_5.png","Iphone 1", "first version",350, [{"sellerName":"Vijay Sales"}], null);
  product2:Product = new Product("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/IPhone_5.png/200px-IPhone_5.png","Iphone 2", "Second version",550, [{"sellerName":"Vijay Sales"}], null);
  searchQuery:String = "your search query....";
  products:Array<Product> = [this.product, this.product2];

  title:String = "This is two way data binding thing....";

  constructor() { }

  ngOnInit() {
  }

  searchData(){
    console.log("hey going to search data for query :: ", this.searchQuery);
  }

}
