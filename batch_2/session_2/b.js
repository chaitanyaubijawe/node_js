class B{


  constructor(property_1){
    // constructor will be called automatically once object is created...if present...
    console.log("inside constructor.. B : " , property_1);
    // instance variable
    this.classLevelProperty = property_1;
  }

  // instance methods....
  m1(){
    console.log("this is m1 of B :: ", this.property_1  );
  }

  m2(){
    console.log("this is m2 of B ");
    return "m2";
  }

}

module.exports.obj = new B("prosdfsfdsfdfperty_1");
