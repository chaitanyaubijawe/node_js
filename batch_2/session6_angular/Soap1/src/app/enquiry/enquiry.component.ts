import { Component, OnInit } from '@angular/core';

export class User{
  name:string;
  email: string;
  message: string;
}
@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
  user: User;
  submitted:boolean = false;// check is form is submitted

  constructor() { }

  ngOnInit() {
    this.user = {
      name:'',
      email:'',
      message:''
    };
  }
get diagnostic(){
    return JSON.stringify(this.user);
}
  /*Process the form*/
  onSubmit(){

    console.log(this.user);
    this.submitted = true;
  }

}
