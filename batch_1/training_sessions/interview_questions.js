"use strict";

var a = "1"
var b = 1
// == checks only value and === checks value and datatype.
console.log("== ", a==b); // true
console.log("===", a===b); // false.


var c = "this is C...";

let d = "this is D.....";

console.log(c);

for(var i=0; i<=5; i ++)

{

    console.log("Inside for loop....", c, d);
    var inside_for = "inside for";
    let inside_for_let = "inside for let"
}

console.log("accessing variable outside block....", inside_for);
// below line of code will not work....... as let has only limited scope. here it is limited to block....
// console.log("accessing let outside block....", inside_for_let);
e= 5;

console.log(e);
