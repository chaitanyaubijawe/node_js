let B = require("./b").varB

class A extends B

{


  m1(){
    console.log("m1 of A");
  }


}



a = new A();

a.m1();
a.m2();
a.m3();
