import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit {

  biDirectionalUserName:String= "this is USERNAME from TS...."
  biDirectionalPwd:String= "this is PWD from TS...."

  constructor() {

    console.log("Inside constructor...")
  }

  ngOnInit() {

    console.log("Inside ngOnInit...")
  }

  eventOnChange(event:any){

    alert("hey!!"+ event.target.value);

    this.biDirectionalUserName = event.target.value;

  }

  onSubmit(){

    alert("submit called!!")
  }

}
