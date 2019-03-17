
"use strict";
//Step-1
  // go to :: https://nodejs.org/en/
  // download nod js executable.
// Step-2
  // double click instal;l iot follow standard procedure...
// Step-3
  // open command prompt
  // node --version
  // node -v
// Step-4
  // node <press enter>
  // write/check any js code here.....
  // .exit

// to execute js code by using node js...
// node file_name.js
var a = "String....";
console.log("Hey there....", a);


// function another(){
//
//   console.log("Inside a function.....");
//   document.getElementById('dummy').innerHTML = " --- Hey there....!";
//
// }


var a = 3
var a = "String.."
var a = "asdasd"
var a = 'asdasd'
var a = "asdas'd smfd,nbashf \"saad\" "
var a = 'asdas\'d smfd,nbashf "saad" '

console.log(a);
let b = "this is with ECMA6";
console.log(b);
const c = "ABC";

// not possible to  reassign value to const variable....
// c = "EFG"
console.log("this is final variable... ", c);

console.log("---------------------------");

let name = "CNB";

// let s = 'hey there :: ' + name;
let lName = "Family"
let s = `hey there :: ${name} - ${lName}`;

console.log(s);
console.log("---------------------------");


// s = "Hey there :: {0} {0} ";

// let op = s.format("CNB");



let bool = false;

console.log("Boolean :: ", bool);


// concatination
a = 1;
b = 3;

console.log(a + b);


a = "1";
b = "3";

console.log(a + b);


a = "1";
b = 3;

console.log(a + b);


a = false;
b = 3;

console.log(a + b);


a = false;
b = "3";

console.log(a + b);
console.log("---------------------------");
let arr  = new Array();
arr = [];
arr.push("1");
arr.push("2");

console.log(arr);

arr.pop()
console.log(arr);

arr.push("2");
arr.push("3");

let elm = arr[0];
console.log(elm);
console.log(arr);


console.log(arr.length)

// define an array new Array() and  []
// adding element to array. array.push()
// arr[7] = "asdasd"
console.log(arr);
// how to access array element :: arr[index numnber] let elm = arr[0];

// iteration...


for(var i=0; i < arr.length ; i++){

  console.log("Element at pos - " + i + " is - " + arr[i]);
}
console.log("---------------------------");

for(var index in arr){

  console.log("Element at pos - " + index + " is - " + arr[index]);
}
console.log("---------------------------");


for(var value of arr){

  console.log("Element is - " + value);
}

let arr2 = [1,2,3];

arr.push(arr2)

console.log(arr);


// Object....

var ob = {};
ob = new Object();

// key:vaue

// friend.Name
// friend.DP_URL
// friend.AGE
console.log("---------------------------");
ob["key_1"] = "Value_1";
ob["name"] = "CNB";
ob["age"] = 30;

console.log(ob);
