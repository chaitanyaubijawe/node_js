import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class ProductService {

  constructor(private http:HttpClient) {

    this.http = http;
  }


  fetchProducts(){

    console.log("fetching products.....");
    return this.http.get("/soaps");
  }
}
