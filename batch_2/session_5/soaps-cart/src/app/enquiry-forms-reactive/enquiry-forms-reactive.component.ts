import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-enquiry-forms-reactive',
  templateUrl: './enquiry-forms-reactive.component.html',
  styleUrls: ['./enquiry-forms-reactive.component.css']
})
export class EnquiryFormsReactiveComponent implements OnInit {


  public name = new FormControl("Enter name here..");

  public myFormGroup = new FormGroup(

    {
      number : new FormControl("Enter number here..", Validators.minLength(20)),
      email : new FormControl("Enter email here..", Validators.minLength(20))
    }

  );



  constructor() { }

  ngOnInit() {
  }


  submitMyform(){


    console.log("Name property value is :: ", this.name.value)
  }

  onSubmit(){

    if(this.myFormGroup.valid){

      console.log("Inside submit form:: " + this.myFormGroup)

    }else{
      console.log("INVALID FORM :: " + this.myFormGroup)
    }
  }
}
