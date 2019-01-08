
let C = require("./c").varC
class B extends C{


  m2(){
    console.log("m2 of B");
  }
}


module.exports.varB=B;
