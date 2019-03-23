import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {AppService} from "../services/app.service";
import {Soap} from "../model/Soap";

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.css']
})
export class ViewProductDetailsComponent implements OnInit {


  private id:Number;
  // public product:Soap = new Soap(null,null,null,null,null);
  public product:any= {};
  constructor(private actRoute:ActivatedRoute, private service:AppService) {


    actRoute.params.subscribe((data:Params)=>{

      this.id = data.id;


    }, (err)=>{


      console.log("Error occured while fethcing path param...", err)
    }, ()=>{


      console.log("Completed activity of fetching  path param...")
    })
  }

  ngOnInit() {

    // call http request fetch data and apply to current page....

    this.service.getProductDetails(this.id).subscribe((data)=>{

      this.product = data[0];

      console.log(this.product);

    },(error)=>{

      console.log("Error occurred while fethcing product info ", error)


    },()=>{} )
  }

}
