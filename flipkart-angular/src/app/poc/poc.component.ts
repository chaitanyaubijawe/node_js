import {Component} from '@angular/core';
import {LoggerService} from '../service/logger.service';

@Component({

  selector:'poc-component',
  templateUrl:'poc.component.html',
  //providers:[LoggerService]

})

export class PocComponent {


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


}
