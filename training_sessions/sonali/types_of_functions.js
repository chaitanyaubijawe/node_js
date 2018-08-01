// function declaration..

function m1()
{
  console.log("Non argument function declaration.......");
}

m1();

function m2(arg_1,arg_2)
{
  console.log("Two argument function declaration.......", arg_1, arg_2);
}

m2("Sonali", "Gharte");

function add(var_1, var_2) {


    var sum = var_1 + var_2;
    console.log("Addition of two variables :: ", sum);
}

add(1,2);
add(2,3);
add(4,5);

var sum_1 = 1+2;
var sum_2 = 2+3;
var sum_3 = 4+5;

console.log("Sum without using function", sum_1, sum_2, sum_3);
// function expression..

// anonymous function....
var m3 = function () {
  console.log("Function expression:: anonymous :: without argument.......");
}


var m4 = function (arg_1, arg_2) {
  console.log("Function expression:: anonymous :: with argument.......", arg_1, arg_2);
}

var add_FE = function (var_1, var_2) {

    var sum = var_1 + var_2;
    console.log("Addition of two variables using function exoression..:: ", sum);
}

m3();
m4("Sonali", "Gharte");
add_FE(1,3);

// benifit of below function is that... whenever an exception is thrown in stack trace
// js interpreter will print function name as well.
// help full for debugging purpose. trace down an error occurred in code.
var m5 = function m5() {
  console.log("Function expression:: anonymous :: without argument.......");
}


var m6 = function m6(arg_1, arg_2) {
  console.log("Function expression:: anonymous :: with argument.......", arg_1, arg_2);
}

var add_FE_1 = function add_FE_1(var_1, var_2) {

    var sum = var_1 + var_2;
    console.log("Addition of two variables using function exoression..:: ", sum);
}
m5();
m6("Sonali" ,"Gharte");
add_FE_1(4,5);

// IIFE: immediately invocable function... expression.....


(function(){
  console.log("This is IIFE. Without an argument...");
})();


(function(arg_1, arg_2){
  console.log("This is IIFE. With an argument...", "fName:: " ,arg_1, "Last Name" ,arg_2);
})("Sonali", "Gharte");

(function (var_1, var_2) {

    var sum = var_1 + var_2;
    console.log("Addition of two variables using IIFE..:: ", sum);
})(55,55);

// ECMA: 6 : Arrow functions:


var arrow_FE_1 = () => {

  console.log("This is arrow function. Without arguments");
};


var arrow_FE_2 = (arg_1, arg_2) => {

  console.log("This is arrow function. With arguments", arg_1, arg_2);
};



var arrow_FE_add = (arg_1, arg_2) => {
  var sum  = arg_1 + arg_2;
  console.log("This is arrow function. Sum :: ", sum);
};

arrow_FE_1();
arrow_FE_2("Sonali", "Gharte");
arrow_FE_add(2,44);
