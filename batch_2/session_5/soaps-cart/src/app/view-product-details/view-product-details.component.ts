import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.css']
})
export class ViewProductDetailsComponent implements OnInit {


  private id:Number;
  constructor(private actRoute:ActivatedRoute) {


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
  }

}
