import { Component, OnInit } from '@angular/core';
import {Soap} from "../model/Soap";
import {AppService} from "../services/app.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public priceArr=[10,20,30];
  public submitted = false;
  public model:Soap = new Soap(1,"Anti Bacterial", "antibacterial soap with fragrance..", 100, "https://vignette.wikia.nocookie.net/thefutureofeuropes/images/b/b5/Soap_large.jpg/revision/latest?cb=20150728164804");
  // creating object of service.....
  private appService:AppService = new AppService();

  onSubmit() {

    this.submitted = true;

    console.log("Here....", this.model.name);

    // if(this.model.name !== ""){
    //
    // }



  }

  newSoap(){


  }

  postData(){

    this.appService.postSoapData(this.model);
  }
}
