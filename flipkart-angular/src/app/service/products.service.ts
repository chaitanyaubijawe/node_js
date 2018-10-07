import {Product} from '../model/product';
import {Injectable} from '@angular/core';

@Injectable()
export class ProductsService{


  products:Array<Product> = [];//generics. create array which will only contains product....

  constructor(){


  }

  getProducts(searchText:string){

    let arrr = [];
    this.products = [];

    this.products.push(new Product("TV_1", 400, 'https://image.shutterstock.com/image-vector/lcd-tv-monitor-vector-illustration-260nw-154257524.jpg'));
    this.products.push(new Product("TV_2", 500,'https://image.shutterstock.com/image-vector/lcd-tv-monitor-vector-illustration-260nw-154257524.jpg'));
    this.products.push(new Product("TV_3", 600,'https://image.shutterstock.com/image-vector/lcd-tv-monitor-vector-illustration-260nw-154257524.jpg'));
    this.products.push(new Product("TV_4", 700,'https://image.shutterstock.com/image-vector/lcd-tv-monitor-vector-illustration-260nw-154257524.jpg'));

    this.products.push(new Product("TV_5", 800,'https://image.shutterstock.com/image-vector/lcd-tv-monitor-vector-illustration-260nw-154257524.jpg'));

    if(searchText === ""){

      arrr = this.products;

    }else{
      for(let item of this.products){

        if(item.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())){
          arrr.push(item)
        }

      }

    }

    return arrr;
  }
}
