import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector:'[myAlert]'
})
export class AlertDirective{


  constructor(){

    //alert("hey there!!");

  }

  @HostBinding("class.btn-danger") clicked:boolean = false;

  @HostListener("click") applyClass(){

    this.clicked = !this.clicked;



  }



}
