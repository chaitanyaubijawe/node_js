import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {AppService} from "../services/app.service";

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit, OnDestroy {


  @Input("argument") argumentPassedToPoc:String;
  @Input("product") product:Product;

  appService:AppService = null;
  constructor(appService:AppService) {
    this.appService = appService;
    // alert("constructor....");

  }

  ngOnInit() {
    // alert("ngOnInit ....")

    console.log("here.....");
    let product:Product = this.appService.getProductData();


  }


  ngOnDestroy(): void {

    // alert("ngOnDestroy ....")
  }
}
