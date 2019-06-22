import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  router:Router=null;

  constructor(router:Router) {
    this.router = router;
  }

  ngOnInit() {
  }


  addProduct(){

    alert("Add product clicked!!!");
    this.router.navigateByUrl("/view");
  }
}
