// Types of function.....

function m1(){

  console.log("M1");
}
m1();


function m2(arg_1, arg_2){
  console.log("M2", arg_1, arg_2);
}
m2(200, 400);


function m3(arg_1, arg_2){
  let sum = arg_1 + arg_2;
  console.log("M3 :: add return::", arg_1, arg_2);
  return sum;
}
let results = m3(200, 400);

console.log("result :: ", results);

// Anonymous function expressions


let m4 = function (){
  console.log("M4");
}

m4();

let m5 = function (arg_1){
  console.log("M5 : ", arg_1);
}
m5(100);

// IIFE :: imediately invocable functions....

(function(){
  console.log("IIFE ");
})();


(function(arg_1){
  console.log("IIFE ", arg_1);
})("200");

// arrow functions....

let m6 = () => {
  console.log("Arrow function...");
}

m6();

let m7 = (arg_1) => {
  console.log("Arrow function...", arg_1);
}

m7(123);

//

let m8 = function () {

  console.log("Inside function...");
  return function(){
    console.log("Returned functions.....");
  }
}

let fn = m8();
console.log(fn);
fn();


let m9 = function(fn){
  console.log("Inside functionas an argument", fn);
  // call back
  fn();
}

m9(function(){
  console.log("sent as argument ");
})





let m10 = function(fn){

  console.log("Data read DB");
  console.log("Data MAP");
  setTimeout(fn, 5000);
}


m10(function(){

  console.log("Hurrey!! this is CB from setTimeout");
})
