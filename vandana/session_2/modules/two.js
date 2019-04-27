console.log("TWO.js");

var obj = {"one":"ONE"}

var m1 = function ()
 {
   console.log("M1 function");
   return "string..."
}

// module.exports.result = m1;
// module.exports = {"m1":m1, "obj":obj};

module.exports.obj = obj
module.exports.m1 = m1
// console.log(module);
