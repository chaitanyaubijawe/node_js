import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {AppService} from "../services/app.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  product:Product = new Product("Iphoneasdhas,nbjahsgckuaygsdkjhasjd,vhjsdgvjkasgcvkasgcvkasgkauysdgfausf", 40,"");
  appService:AppService = null;
  searchQuery:String;

  products:Array<Product> = [];
  constructor(appService:AppService) {

    this.appService = appService;
  }

  ngOnInit() {

    this.product = this.appService.getProductData();
    this.appService.getDataHTTP().subscribe((data:Array<Product>) => {

        this.products = data;
        console.log("NEXT section of observable....", data);

    },
      (error) =>{

        console.log("ERROR section of observable....",error);
      }, ()=>{


        console.log("Complete section of observable....");

      })
  }

}
