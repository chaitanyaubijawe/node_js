// function declaration....

function add(arg_1, arg_2){


  return arg_1 + arg_2;

}


var addition_1 = add(2,3);
console.log("addition_1 " , addition_1);
var addition_2 = add(3,3);
console.log("addition_2 " , addition_2);

// Function expressions.

var addFE = function (arg_1, arg_2) {
  return arg_1 + arg_2;
}

var addition = addFE(1,2);
console.log("addition FE " , addition);


(function (arg_1, arg_2) {
    console.log("IIFE", arg_1, arg_2);
})("first...", "second");


var a = (function (arg_1, arg_2) {
    console.log("IIFE", arg_1, arg_2);
});

a("varaible madhe ghetle", "ikde sudha...");


// arrow function


var addAFE = (arg_1, arg_2) => {
  return arg_1 + arg_2 ;
}


var addition = addAFE(1,2);

console.log("Addition using AFE ", addition);


var result = 0;
var addAFEOneLiner = (arg_1, arg_2) =>  result = arg_1 + arg_2 ;
var addition = addAFEOneLiner(1,2);

console.log("value of result :: ", result);


// World map:
// {"IND":{ "MP" :["Jabalpur"], "MAH":["Pune"]} , "US":{"CT":["danbury.."]} }
var worldMap = {IND : {"MAH":["Pune"]}}
var stateMapOfIndia = worldMap['IND'];

//stateMapOfIndia = {"MAH":["Pune"]}

var citiesOfMah = stateMapOfIndia['MAH'];

// citiesOfMah = ['Pune']
