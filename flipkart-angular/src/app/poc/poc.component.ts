import {Component} from '@angular/core';
import {LoggerService} from '../service/logger.service';
import {Product} from '../model/product';
import {NgForm} from '@angular/forms';

@Component({

  selector:'poc-component',
  templateUrl:'poc.component.html',
  //providers:[LoggerService]

})

export class PocComponent {
  stringInterpolation:string = "String property binding example";
  shouldEnable:boolean = true; // this is property binding....
  biDirectional:string = "This is biderectional binding....";


  shouldShowTxt:boolean = false;

  products = [];
  productTS:Product = new Product(null,null, null);

  constructor(private loggerService: LoggerService){

  }

  showToggle(){

    this.shouldShowTxt = !this.shouldShowTxt;
    this.products.push(1);


   // let loggerService = new LoggerService();

    this.loggerService.logMsg("hi there!!");

  }

  onInputChange(event:any){

    //console.log(event.target.value);

    this.biDirectional = event.target.value;
  }

  addProduct(){



  }


  trimData(data:any){
    return this.loggerService.subsstring(data);
  }

  formSubmit(loginForm:NgForm){

    if(loginForm.value.password === "")
    {

      alert("Password is empty...");
    }

    console.log("Form submitted...", loginForm)


  }


}
