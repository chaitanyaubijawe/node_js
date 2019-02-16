import {Component, OnInit, OnChanges, Input, OnDestroy, DoCheck, AfterViewChecked} from '@angular/core';
import {
  AfterContentChecked, AfterContentInit, AfterViewInit,
  SimpleChanges
} from "@angular/core/src/metadata/lifecycle_hooks";
import {Soap} from "../model/Soap";

@Component({
  //selector: '[app-poc]',
  //selector: '.app-poc',
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  //template: 'hi there',
  // template: `hi there
  //
  // HEY BUDDY
  // `,
  styleUrls: ['./poc.component.css']
  // styles: [`h3 {
  // color: blueviolet;
  // }`]
})
export class PocComponent implements OnInit , OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{



  biDirectionalUserName: String = "this is USERNAME from TS....";
  biDirectionalPwd: String = "this is PWD from TS....";

  @Input() arg:String;

  private soap:Soap= new Soap("Anti Bacterial", "antibacterial soap with fragrance..", 100, "https://vignette.wikia.nocookie.net/thefutureofeuropes/images/b/b5/Soap_large.jpg/revision/latest?cb=20150728164804");
  private soaps:Soap[] = new Array();

  constructor() {

    console.log("Inside constructor...");
  }

  ngOnInit() {

    console.log("Inside ngOnInit...");

    this.soaps.push(new Soap("Anti ARRAY_1", "antibacterial soap with fragrance..", 100, "https://vignette.wikia.nocookie.net/thefutureofeuropes/images/b/b5/Soap_large.jpg/revision/latest?cb=20150728164804"));
    this.soaps.push(new Soap("Anti ARRAY_2", "antibacterial soap with fragrance..", 100, "https://vignette.wikia.nocookie.net/thefutureofeuropes/images/b/b5/Soap_large.jpg/revision/latest?cb=20150728164804"));
    this.soaps.push(new Soap("Anti ARRAY_3", "antibacterial soap with fragrance..", 100, "https://vignette.wikia.nocookie.net/thefutureofeuropes/images/b/b5/Soap_large.jpg/revision/latest?cb=20150728164804"));

  }


  ngOnChanges(changes: SimpleChanges): void{

    console.log("Inside ngOnChanges..." + this.arg)
  }

  ngOnDestroy(): void {

    console.log("Inside ngOnDestroy..." )
  }

  ngDoCheck(): void{

    console.log("Inside ngDoCheck")
  }

  ngAfterContentInit(): void {

    console.log("Inside ngAfterContentInit")
  }

  ngAfterContentChecked(): void{

    console.log("Inside ngAfterContentChecked")
  }

  ngAfterViewInit(): void{
    console.log("Inside ngAfterViewInit")

  }

  ngAfterViewChecked(): void {

    console.log("Inside ngAfterViewChecked")
  }






  eventOnChange(event: any) {

    alert("hey!!" + event.target.value);

    this.biDirectionalUserName = event.target.value;

  }



  onSubmit() {

    alert("submit called!!")
  }

  addToCart(){

    console.log("Soap added to cart");
  }



}


// export interface ABC
// {
//
//   m1():String;
//
// }
//
// export class A implements ABC{
//
//   m1(): String {
//
//
//     return undefined;
//   }
//
//
// }
