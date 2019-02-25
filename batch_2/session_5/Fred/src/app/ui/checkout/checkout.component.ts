import { Component, OnInit , Input} from '@angular/core';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  constructor(private appService:AppService) { }

  ngOnInit() {

    let items = localStorage.getItem("elements");
    this.appService.elementsToCkeckout = JSON.parse(items);
    console.log("Elememnts :: ",this.appService.elementsToCkeckout)
  }

}
