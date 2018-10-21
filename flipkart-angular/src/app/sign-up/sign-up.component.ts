import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userName:String;
  password:String;

  data:any={};
  error:any={};

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {

    this.authService.signOut();

  }

  doSignUp(){

    console.log(this.userName);
    console.log(this.password);
    // observable stuff.
    // inside of next
    this.authService.signIn(this.userName, this.password);
    this.authService.signUp().subscribe((data)=>{
      console.log("Data ala re ala ", data);
      this.data = data;

    }, (error)=>{

      console.log("Error :: ", error);
      this.error = error;

    }, ()=>{

        console.log("Complete section called.");
    });
    //this.router.navigate(['']);

  }

}
