import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  url:String = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/IPhone_5.png/200px-IPhone_5.png";
  constructor() { }

  ngOnInit() {
  }

}
