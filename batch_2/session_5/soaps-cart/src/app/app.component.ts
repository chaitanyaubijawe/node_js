import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Soaps-cart';
  anotherTitle = "Vatsalya....";
  abc="";

  constructor(){

    this.abc = "therfewrr";

    // console.log("this is constructor.....");

    this.m1();
  }

  m1(){


    this.abc = "kuch bhi...."
  }

}
