import { Directive,HostListener } from '@angular/core';


@Directive({
  selector: '[appClickEvent]'
})
export class ClickEventDirective {

  constructor() {

    console.log("Inside constructor of ClickEventDirective")
  }

  @HostListener("click") myFunction(){

    alert("This is my function.....")
  }

}
