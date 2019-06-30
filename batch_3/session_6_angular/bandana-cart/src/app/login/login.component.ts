import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String;
  pwd:String;
  router:Router;

  loginForm = new FormGroup({emailForm: new FormControl('', [Validators.required, Validators.minLength(10)]),pwdForm: new FormControl('',[Validators.required, Validators.minLength(10)]) });

  constructor(router:Router) {

    this.router = router;
  }

  ngOnInit() {
  }

  login(){

    if(this.email === "a" && this.pwd === "a"){

      localStorage.setItem('loggedIn', "true");

      this.router.navigateByUrl("/");
    }
  }

  postData(){

    alert("submitted!!")
  }

}
