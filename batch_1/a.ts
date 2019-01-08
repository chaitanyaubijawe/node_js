export class A{

  titlet:String="this is ts.....";

  constructor(){
    let titlet="sdfsdf";
    console.log("This is ts... " , titlet);

    this.titlet = "this is modified here....";
    this.m1(2,this.titlet);

  }

  m1(varA:Number, varB:String){

  }
}


new A();
