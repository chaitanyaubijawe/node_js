import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-item-feed',
  templateUrl: './item-feed.component.html',
  styleUrls: ['./item-feed.component.css']
})
export class ItemFeedComponent implements OnInit {
  array = [
    {
      id: 1,
      name: 'Hamburger',
      price: 200,
      Checked: false,
      quantity:0
    },
    {
      id: 2,
      name: 'Fries',
      price: 100,
      Checked: false,
      quantity:0
    },
    {
      id: 3,
      name: 'Coke',
      price: 50,
      Checked: false,
      quantity:0
    },
    {
      id: 4,
      name: 'Pepsi',
      price: 50,
      Checked: false,
      quantity:0
    }

  ];

  op_array:any = [];

  constructor(public router:Router, public appService:AppService) {


  }

  ngOnInit() {

  }

  private onSubmit() {
    console.log(`Checkbox clicked`);

    this.op_array = [];
    for(let item of this.array){

      if(item.Checked){
        this.op_array.push(item);
      }
    }
    // this.appService.elementsToCkeckout = this.op_array;
    localStorage.setItem("elements", JSON.stringify(this.op_array));
    // this.router.navigate(['checkout']);
    this.router.navigateByUrl('/checkout');


}


  isChecked(element, event:any){

    console.log("here...", event.srcElement.checked, element.quantity);
    element.Checked = event.srcElement.checked;
    //this.op_array.push(element);
  }


}
