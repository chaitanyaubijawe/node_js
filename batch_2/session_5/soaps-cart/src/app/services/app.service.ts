import { Injectable } from '@angular/core';
import {Soap} from "../model/Soap";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }


  postSoapData(model:Soap){


    console.log("AppService.postSoAPData" + JSON.stringify(model));

    return this.http.post("/soap", model);
  }

  getSoaps(searchQuery){

    let url = "/soaps";

    if(searchQuery){

      url += "?searchQuery=" + searchQuery;
    }

    // soaps?searchQuery=asd

    return this.http.get(url);
  }
}
