import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Product = new Product("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/IPhone_5.png/200px-IPhone_5.png","Iphone 1", "first version",350, [{"sellerName":"Vijay Sales"}], null);

  constructor() { }

  ngOnInit() {
  }

}
