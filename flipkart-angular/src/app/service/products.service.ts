import {Product} from '../model/product';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class ProductsService{


  products:Array<Product> = [];//generics. create array which will only contains product....

  constructor(public http:HttpClient){


  }

  getProducts(searchText:string){

    let arrr = [];
    this.products = [];

    this.products.push(new Product("TV_1", 400, 'https://image.shutterstock.com/image-vector/lcd-tv-monitor-vector-illustration-260nw-154257524.jpg'));
    // this.products.push(new Product("TV_2", 500,'https://image.shutterstock.com/image-vector/lcd-tv-monitor-vector-illustration-260nw-154257524.jpg'));
    // this.products.push(new Product("TV_3", 600,'https://image.shutterstock.com/image-vector/lcd-tv-monitor-vector-illustration-260nw-154257524.jpg'));
    // this.products.push(new Product("TV_4", 700,'https://image.shutterstock.com/image-vector/lcd-tv-monitor-vector-illustration-260nw-154257524.jpg'));
    //
    // this.products.push(new Product("TV_5", 800,'https://image.shutterstock.com/image-vector/lcd-tv-monitor-vector-illustration-260nw-154257524.jpg'));

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


  testObservable():Observable<string>{

    let obs_obj:Observable<string> = new Observable((observe)=>{


      observe.next("This is data...");
      observe.complete();
      //observe.error();


    });

    return obs_obj;
  }

  getProductsObservable(searchText:string):Observable<Object>{

    let options = {};
    if(searchText){

      let params = new HttpParams().set('searchQuery', searchText);
      options["params"] = params;
    }
    return this.http.get("/services/products", options);
  }


  addProduct(product:Product):Observable<Object>{

    let options = {};
    // basic validations...
    if(product.name !== null){

      // let params = new HttpParams().set('searchQuery', searchText);
      // options["params"] = params;


    }

    let body = JSON.stringify(product);

    console.log("This is request payload...",body);

    return this.http.post("/services/product",      product);
  }



}
