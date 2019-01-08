"use strict";

var b = {"B":"This is variable present in b file....."};
var m1= function () {

  console.log("M1 of b");
}


var m2= function () {

  console.log("M2 of b");
}

//module.exports = b;
//module.exports.b = b;
//module.exports = m1;
module.exports = {m1, m2, b};

//exports = {}
// exports.b = b;
// exports["b"] = b;
console.log(module.exports);
