export class Product {
  url:String = 'Iphone';
  name:String = 'Iphone';
  description:String = 'This is best phone ever.';
  price:Number = 50;
  sellers:any="any data type can be accommodate here...";
  manufacturer:Object={};

  constructor(url:String,name:String ,description:String,price:Number = 50,sellers:any, manufacturer:Object){
    this.url= url;
    this.name= name;
    this.description = description;
    this.price=price;
    this.sellers=sellers;
    this.manufacturer=manufacturer;
  }



}
