// function declarations:

function add(arg_1, arg_2){

  console.log("Function declarations:: ", arg_1 + arg_2);
}


add(1,2); // "Function declarations:: 3"


// function expressions...

var add = function(arg_1, arg_2){

  console.log("Function expressions : anonymous functions expressions :: ", arg_1 + arg_2);
}


add(1,2);

var add = function addition(arg_1, arg_2){

  console.log("Function expressions : anonymous functions expressions with name specified.. stack trace me name of function print karega..:: ", arg_1 + arg_2);
}
add(1,2);
// iife : immediately invoked function expressions

(
 function(arg_1, arg_2)

 {


   console.log("IIFE add:: ", arg_1 + arg_2);
 }
)(1, 2);


var addition = (
 function(arg_1, arg_2)

 {


   console.log("IIFE add result is catched and returned...:: ", arg_1 + arg_2);
   return arg_1+arg_2;
 }
)(1, 2);


console.log("Catched results in addition : ", addition);


var add = (
 function(arg_1, arg_2)

 {
   console.log("IIFE add catched in variable and then invoked...:: ", arg_1 + arg_2);
 }
);

add(1,2);



// arraow function expressions

const addAr = (arg_1, arg_2) => {

  console.log("Arrow function expressions :: add ::  ", arg_1 + arg_2);
};


addAr(1,2);
