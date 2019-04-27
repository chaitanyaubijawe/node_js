// Types of functions in JS
function m1()
{
  console.log("This is M1");
}

m1();

function m2(arg_1)
{
  console.log("This is M2 arg is ", arg_1);
}

m2("Vandana");

function m3(arg_1, arg_2)
{
  console.log("This is M2 arg is ", arg_1, arg_2);
}

m3("Vandana", "Shrivastava");

// JS :: Anonymous function.

var m4 = function () {
  console.log("This is M4 anonymous");
}

m4();


var m5 = function (arg_1, arg_2) {
  console.log("This is M4 anonymous arg is ", arg_1, arg_2);
}

m5();

// IIFE : immediately invocable functions expressions

(function(arg_1){
  console.log("IIFE : ", arg_1);
})("Vandana");


// ECMA-6 Arrow functions

var m6 = (arg_1) => {

    console.log("Arrow Function ", arg_1);
}
m6("Vandana");



var m7 = (arg_1) =>{

  // some processing
  return "This is String....";
}


var result = m7();

console.log(result);

// function as argument..
var m8 = (cb) => {

  console.log("BEFORE :: This is demonstration of Function as argument...");

  var result = 5 + 6;
  cb(result);

  console.log("AFTER :: This is demonstration of Function as argument...");
}

var m9 = function () {
  console.log("argument passed as a function......");
}

// m8(m9)

m8(function (result) {
  console.log("argument passed as a function......", result);
})

// m8()

var m10 = () =>{

  return function(){
    console.log("Function can returnn another function");
  }
}


var ret = m10();
ret()

m10()();
