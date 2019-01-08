class A{


  constructor(){
    // constructor will be called automatically once object is created...if present...
    console.log("inside constructor..");
  }

  m1(){
    console.log("this is m1");
  }

  m2(){
    console.log("this is m2");
    return "m2";
  }

}



// m1();
// this is object creation.... instantiation....
let a = new A();
// now let a is a reference variable....holding object of type A....

a.m1();
a.m2();


// helperFunction1 = require("./helper").asd
// helperFunction1 = require("./helper").asd
let sdfsdf = require("./helper").var_helper
let objB = require("./b").obj

console.log(sdfsdf);
// helperFunction = require("helper.js")
sdfsdf.helperFunction();
sdfsdf.helperFunction2();
sdfsdf.helperFunction3();

objB.m1()
