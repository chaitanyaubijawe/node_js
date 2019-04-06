console.log("Here!!");
// ECMA
var a = 5;// it has global scope...
// ECMA-6
let b = 5;// block specific scope....
const c = 5; // final variable... cannot reassign value to it.

console.log(a);
console.log(b);
console.log(c);


for (var i=0;i<=5 ; i++)
{

  var m_a = "value_" + i;
  console.log("here......." + m_a);
}


console.log(m_a);

console.log("------------------------");
// c = 10; not possible.. it will fail here..

// js RHS: valid JS expressions...
// RHS side will be evaluated first... and results been assigned to LHS
var sum = a % b;
console.log(sum);

var s = "ABC";
s = 'ABC';
s = 'A"B"C';
s = 'A\'BC';
s = "A\"BC";
s = "A'BC";
s = "ABC";
var s2 = "EFG";

var result = s + " - " + s2;

console.log("Here is my result :: ", result);
console.log("Here is my result :: " + result);
console.log(`Here is my result :: ${result}`);

var sss = `

This

is

my

code
`
console.log(sss);


console.log("------------------------");


var bool = true
bool = false

var n = 1
var sss = "asdads -- "

var rs =  n + bool;
rs =  sss + bool;

console.log(rs);

console.log("------------------------");


var arr = new Array();
arr = [];

arr.push("item_1");
arr.push(1);
arr[0] = "item_3";
// it wil push elements in array
console.log(arr.length);


console.log(arr[0]);
console.log(arr[1]);
console.log("--------BEFORE POP--------");
console.log(arr);
console.log("-------BEFORE POP---------");
arr.pop();
console.log("--------AFTER POP--------");
console.log(arr);
console.log("-------AFTER POP---------");
arr.push(1);
arr.push(2);
arr.push("another element");


for(var i=0;i <=10; i ++){

  arr.push("element-" + i)
}

console.log("------------------------");
for(var i=0;i < arr.length; i++){

  console.log("Array element at index :: " + i + " -- is == " + arr[i]);
  // arr.push("another element");
}
console.log("------------------------");

for(var index in arr){
  console.log("Index position is " + index + " -- valiue is -- " + arr[index]);
}

console.log("------------------------");
for(var value of arr){
  console.log("Value is -- " + value);
}


console.log("------------------------");

console.log("------------forEachforEach------------");
arr.forEach(

  function(value){
    console.log("forEach :: Value is -- " + value);
  }
)


console.log("------------forEachforEach------------");


// key value pair...
var obj = {};
obj = new Object();

obj["key_1"] = "value";
obj["key_2"] = "value";
obj["key_3"] = [12,2,3,4,5];// array...
obj["key_4"] = {"key_inside_1":"value_inside"}; // object...

console.log(obj);
console.log(obj["key_1"]);
console.log(obj["key_2"]);

console.log("------------------------");



arr = [{"key_1":"value_1","key_2":"value_2","key_3":"value_3"}, {"key_1":"value_1","key_2":"value_2","key_3":"value_3"},{"key_1":"value_1","key_2":"value_2","key_3":"value_3"}]
console.log("------------forEachforEach------------");
arr.forEach(
  function(value){
    console.log("forEach :: Value is -- " + value.key_1 + "-- " + value.key_2 + "-- "+ value.key_3);
  }
)

console.log("------------forEachforEach------------");


// JSON
var o = {"key_1":"value_1", "key_2":"value_2"};


console.log(o["key_1"]);
console.log(o["key_2"]);

o = [{"key_1":"value_1", "key_2":"value_2"}, {"index2key_1":"value_1", "index2key_2":"value_2"}];

// {"key_1":"value_1", "key_2":"value_2"}
var dd = o[0];
console.log(dd["key_1"]);// value_1

var ddd = o[0]["key_1"];// value_1
console.log(ddd);


console.log("###################");

var clientInfo = {"id":1, "clientName":"Vandana", "contactNumber":"1234567890"};

for(var key in clientInfo){

  console.log("Key is :: " + key + " -- valiue is --" + clientInfo[key]);
}


console.log(clientInfo["qwertyu"]);

console.log(Object.keys(clientInfo));

for(var key of Object.keys(clientInfo)){

  console.log(clientInfo[key]);
}
// {"IND":{"MP":[], "UP":[]}}
// WorldMap
  // - Ind
    // - MP
      // - Jabalpur
      // - indoor
      // - city_..1
      // - city_..10
    // - UP
      // - Luckhnow
      // - ilahabad
      // - city_..1
      // - city_..10
    // - Bihar
      // - Patna
      // - city_..1
      // - city_..10
  // - USA
    // - CT
    // - ABC
    // - XYZ
var WorldMap = {"key":{"inner":"innervalue", "2":"two"}}
