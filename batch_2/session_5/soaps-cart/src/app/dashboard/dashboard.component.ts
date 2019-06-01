import { Component, OnInit } from '@angular/core';
import {Soap} from "../model/Soap";
import {ProductService} from "../services/product.service";
import {AppService} from "../services/app.service";




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private soaps:Soap[] = new Array();
  private searchQuery:String;

  // private service:ProductService = new ProductService();

  constructor(private service:ProductService, private appService:AppService) {

    this.service = service;
  }

  ngOnInit() {

    console.log("ngOnInit");

    // this.soaps.push(new Soap(1, "Anti ARRAY_1", "antibacterial soap with fragrance..", 100, "https://vignette.wikia.nocookie.net/thefutureofeuropes/images/b/b5/Soap_large.jpg/revision/latest?cb=20150728164804"));
    // this.soaps.push(new Soap(2,"Anti ARRAY_2", "antibacterial soap with fragrance..", 100, "https://vignette.wikia.nocookie.net/thefutureofeuropes/images/b/b5/Soap_large.jpg/revision/latest?cb=20150728164804"));
    // this.soaps.push(new Soap(3,"Anti ARRAY_3", "antibacterial soap with fragrance..", 100, "https://vignette.wikia.nocookie.net/thefutureofeuropes/images/b/b5/Soap_large.jpg/revision/latest?cb=20150728164804"));


    // this.appService.getEmp().subscribe((data)=>{
    //
    //   console.log(data);
    //
    // },(error)=>{
    //
    //
    // },()=>{
    //
    //
    // });

    this.appService.getSoaps(null).subscribe((data)=>{
      console.log("Data aala re :: ", data);
      this.soaps = <Soap[]>data; // typecasting. convert data to array of Soap.

    }, (error)=>{

      console.log("Error aala re :: ", error);

    }, ()=>{

    });
  }


  searchSoaps(){

    // request http
    // get products
    // assign them to soaps
    console.log("searchQuery", this.searchQuery);
    // this.soaps.push(new Soap(4,"Anti ARRAY_4", "antibacterial soap with fragrance..", 100, "https://vignette.wikia.nocookie.net/thefutureofeuropes/images/b/b5/Soap_large.jpg/revision/latest?cb=20150728164804"));
    // this.soaps.push(new Soap(5,"Anti ARRAY_5", "antibacterial soap with fragrance..", 100, "https://vignette.wikia.nocookie.net/thefutureofeuropes/images/b/b5/Soap_large.jpg/revision/latest?cb=20150728164804"));
    // this.soaps.push(new Soap(6,"Anti ARRAY_6", "antibacterial soap with fragrance..", 100, "https://vignette.wikia.nocookie.net/thefutureofeuropes/images/b/b5/Soap_large.jpg/revision/latest?cb=20150728164804"));
    //
    // this.service.fetchProducts().subscribe((data)=>{
    //
    // }, (err)=>{
    //
    // }, ()=>{
    //
    // });


    this.appService.getSoaps(this.searchQuery).subscribe((data)=>{
      console.log("Data aala re :: ", data);
      this.soaps = <Soap[]>data; // typecasting. convert data to array of Soap.

    }, (error)=>{

      console.log("Error aala re :: ", error);

    }, ()=>{

    });
  }

}
