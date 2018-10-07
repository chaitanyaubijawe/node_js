import {
  Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked
} from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit,OnChanges, DoCheck, AfterContentInit,AfterContentChecked, AfterViewInit,AfterViewChecked  {





  @Input('productElement') product:Product;
  @Input() productName:string;
  @Output('onPDisplay') onProductDisplay:EventEmitter<Product> = new EventEmitter<Product>();


  anotherProperty:string = "this is ng-content..";

  constructor() {

    console.log();
    console.log("Constructor called!!");
  }

  ngOnInit(): void  {

    console.log("ngOnInit called!!");
    this.onProductDisplay.emit(this.product);
  }


  ngOnChanges(changes: SimpleChanges): void {

    console.log("ngOnChanges called!!",changes);
  }


  ngDoCheck(): void {

    console.log("ngDoCheck called!!");
  }


  ngAfterContentInit(): void {

    console.log("ngAfterContentInit called!!");
  }

  ngAfterContentChecked(): void {

    console.log("ngAfterContentChecked called!!");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called!!");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called!!");
  }

}
