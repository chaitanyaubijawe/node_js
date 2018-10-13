import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id:number;

  constructor(private actRoute:ActivatedRoute) {

     actRoute.paramMap.subscribe((data:Params)=>{

       this.id = data.params.id;

     });
  }

  ngOnInit() {

    console.log("Ide captured from path.....", this.id);
  }

}
