function m1() {

  console.log("Inside three.m1");

return "this....."
}

var name = "abc";
var obj = {name, m1 };

// var a = obj.m1();

console.log(obj.m1());
//console.log(obj['m1']);

//console.log();
module.exports = obj;
