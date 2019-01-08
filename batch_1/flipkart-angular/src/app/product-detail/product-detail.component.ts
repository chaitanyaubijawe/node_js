import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductsService} from '../service/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id:number;

  productName:String="";
  productPrice:String="";

  constructor(private actRoute:ActivatedRoute, private productService:ProductsService) {

     actRoute.paramMap.subscribe((data:Params)=>{

       this.id = data.params.id;

     });
  }

  ngOnInit() {

    console.log("Ide captured from path.....", this.id);
    this.productService.getProductById(this.id).subscribe((data)=>{

      console.log("Data ala re:: ", data);

      this.productName = data.name;
      this.productPrice = data.price;

    }, (error)=>{

    },
      ()=>{

      }
    );
  }

}
