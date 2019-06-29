import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppService} from "../services/app.service";
import {Product} from "../model/product";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public router:Router=null;
  public varService:AppService=null;
  product:Product = new Product("",null,"");
  error:String = "";

  constructor(router:Router,service:AppService) {
    this.router = router;
    this.varService = service;
  }

  ngOnInit() {
  }


  addProduct(){

    alert("Add product clicked!!!");
    this.varService.postDataHTTP(this.product).subscribe((data)=>{

      this.router.navigateByUrl("/");

    },(error)=>{

      this.error = "Error occured...";
      console.log("Error.... aya re...");
    },()=>{})

  }
}
