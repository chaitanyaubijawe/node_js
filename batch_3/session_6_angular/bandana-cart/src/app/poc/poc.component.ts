import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit, OnDestroy {


  @Input("argument") argumentPassedToPoc:String;
  @Input("product") product:Product;

  constructor() {

    // alert("constructor....");

  }

  ngOnInit() {
    // alert("ngOnInit ....")

    console.log("here.....")

  }


  ngOnDestroy(): void {

    // alert("ngOnDestroy ....")
  }
}
