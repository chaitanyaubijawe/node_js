export class Soap{

  public name:String;
  public id:Number;
  public description:String;
  public url:String;
  public price:Number;

  constructor(id:Number,name:String, description:String, price:Number, url:String){

    this.name = name;
    this.id = id;
    this.description = description;
    this.price = price;
    this.url = url;

  }

}
