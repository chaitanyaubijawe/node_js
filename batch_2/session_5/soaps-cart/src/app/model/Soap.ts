export class Soap{

  private name:String;
  private id:Number;
  private description:String;
  private url:String;
  private price:Number;

  constructor(id:Number,name:String, description:String, price:Number, url:String){

    this.name = name;
    this.id = id;
    this.description = description;
    this.price = price;
    this.url = url;

  }

}
