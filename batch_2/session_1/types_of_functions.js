// what is function?
// 1. set of lines.
// 2. task...
// why do we need function?

// Type of functions....
// 1. function declaration...
// 2. function expresion...



// 1. function declaration...
// declare a function.....
function m1(){

   console.log("This is function m1....");
   // return "asdasdasdasda";
   // return {"sdfs":"asfsa"};
   // return [1,2,2,3,4];
   return 5555;
}
// to call a function in js.....
let op_1 = m1();

console.log("printing op_1", op_1);

function m1_arg(arg1, arg2){

  console.log("This is function m1....", arg1, arg2);
}


// exercise:1 [1,2,3,4] == 1,2,3,4

function exercise_1(arr_arg, separator) {
  let output = "";

  for(let index = 0; index < arr_arg.length ; index++){

    output = output + separator + arr_arg[index];

  }

  output =  "'" + output.substring(1) + "';"
  console.log("output is :: ", output);
  return output;
}

let arr = ['a','b','c'];

exercise_1(arr, "|");
exercise_1(['c','d','e'], ",");
exercise_1(['c','d','e'], ":");

let op = exercise_1(['c','d','e'], "-");

console.log("Output returned by  a function is : ", op);

m1_arg("argument one is passed... ", 2);
m1_arg(3, 2);
m1_arg(3, "sdfsdfdf");
m1_arg("argument one is passed... ", {"dsfs":"asdfa"});
m1_arg("argument one is passed... ", ["dffsdf","sdfsdf"]);


// 2. function expresion...
//  benefit of this typoe of function is that.... it will print name of the function in error stack trace...
//let m2 = function m2_expression(arg_1,arg_2) {
let m2 = function m2_expression() {

  console.log("This is function m2....");

}

console.log(m2);
m2();

// anonymous function expression....
//let m3 = function(arg_1) {
let m3 = function() {

  console.log("This is function m2....");

}

console.log(m3);
m3();


// IIFE:: immedeately invocable function.. expression....


//(function(arg){
(function(){
  console.log("IIFE....");
})();
//})("asdasds");


// Arrow function:: ECMA-5:6


let m4 = () => {

  console.log("This is arrow function");
}


m4();


let m5 = () => console.log("This is arrow function without curly brackets...");
m5();


// Exercise ::
// World-countries:states:cities....

{"key":"value..."}
{"key":{"s":"as", "as":"asd", "asdasda":"asdas"}}
{"key":{"key_1":[]}}
{"key":[]}


// world_map = {"IND":{"MAH":["Pune", "Mumbai"]}, "US":{"CT":["Danbury"]}, "PAK":{"karachi":["karachi..."]}}
//

//

// IND
//    - MAH
      // - Pune
      // - Mumbai


// generate random cities...


// exercise to generate random string....
// city_1
// city_2
// city_3
// city_4.......

//

let op = "city_";
let opp = op + 1; // city_1..... city_10
let opp = op + 2; // city_1..... city_10
let opp = op + 3; // city_1..... city_10


// i need the o/p inside an array...
// generateCities(10)
// return array populated by cities generated inside function...
// ['city_1', 'city_2'....] // arrray.....

// generateMHStateData() :: return obj : {"MAH":["Pune", "Mumbai"]} // make use of generateCities function..... to generate cities for state....
// generateMPStateData() :: return obj : {"MAH":["Pune", "Mumbai"]}
// generateUPStateData() :: return obj : {"MAH":["Pune", "Mumbai"]}
