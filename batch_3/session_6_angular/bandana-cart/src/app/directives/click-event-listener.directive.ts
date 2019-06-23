import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appClickEventListener]'
})
export class ClickEventListenerDirective {

  constructor() {


  }

  @HostListener ('click') myEvent(){

    alert("hello!!")

  }

  @HostListener ('mouseover') onMouseOver(){

    alert("hello!!")

  }
}
