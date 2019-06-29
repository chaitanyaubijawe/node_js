import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  http:HttpClient = null;
  constructor(http:HttpClient) {
    this.http = http;
  }

  getProductData():Product {

    //alert("inside service....");
    return new Product("Iphone 11", 40,"");

  }

  getDataHTTP(){

    return this.http.get("http://www.mocky.io/v2/5d0f0a003200006600dc6966");
  }


  postDataHTTP(request:Product){

    return this.http.post("http://www.mocky.io/v2/5d16e23b2f0000aa1425fa37a123", request);
  }

}
