import { Injectable } from '@angular/core';
import {Soap} from "../model/Soap";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }


  postSoapData(model:Soap){


    console.log("AppService.postSoAPData" + JSON.stringify(model));

  }
}
