import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  product:Product = new Product("Iphoneasdhas,nbjahsgckuaygsdkjhasjd,vhjsdgvjkasgcvkasgcvkasgkauysdgfausf", 40);
  constructor() { }

  ngOnInit() {
  }

}
