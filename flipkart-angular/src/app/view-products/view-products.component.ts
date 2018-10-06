import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {


  @Input('productElement') product:Product;
  @Output('onPDisplay') onProductDisplay:EventEmitter<Product>= new EventEmitter<Product>();

  anotherProperty:string = "this is ng-content..";

  constructor() { }

  ngOnInit() {

    this.onProductDisplay.emit(this.product);
  }

}
