export class Paytmreq{

  ORDER_ID: String;
  CUST_ID:String;
  TXN_AMOUNT:String;
  MOBILE_NO:String;
  EMAIL:String;

  constructor(ORDER_ID: String,
  CUST_ID:String,
  TXN_AMOUNT:String,
  MOBILE_NO:String,
  EMAIL:String){

    this.ORDER_ID = ORDER_ID;
    this.CUST_ID = CUST_ID;
    this.TXN_AMOUNT = TXN_AMOUNT;
    this.MOBILE_NO = MOBILE_NO;
    this.EMAIL = EMAIL;

  }

}
