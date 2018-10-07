import {Component} from '@angular/core';
import {LoggerService} from '../service/logger.service';

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



}
