console.log("Hi there!!!");
var a = 10;// variable declaration...
let b = 10;// variable declaration... ecma6
console.log("Value of a is :: ", a);
console.log("Value of b is :: ", b);


for(var i =1 ; i<=5; i ++ )
{
  let abc = "hi there _ " + i;
  console.log("Value of abc ::: ", abc);
}

// console.log("Value of abc ::: ", abc);
const a_const = 4;
console.log("Value of a_const ::: ", a_const);
// a_const = 5

let e = 5;// number
let f = 5;
let sum = e + f;
let g = "string...";// string...
let h = "another string....";

let concat = g + h;

let k = "abc\"d\"e'f'g";
k = 'abc\'d\'e"f"g';

let bool = true;//1
// bool = false;// 0

let j = 1 + bool;

console.log("J :: ", j);

let l = "abc -- ";
let m = "efg"

console.log(l + m);
let concatination = l + m;
console.log(concatination);

console.log( "This is also concatination " + concatination);



let n = `this is
multiline

js
statement..`;

console.log("-- ", n);
let o = "asdadsas"+
"asdasd"+
"asdasd"+
"asdasd";
console.log("-------------------");

let p = 1;// number
let q = "2";// string


let arr = new Array();
arr = [];
arr.push(p);
arr.push(q);

let arr_2 = [];
arr_2.push("another_1")
arr_2.push("another_2")
arr_2.push("another_3")

arr.push(arr_2);

console.log("Array elememnts aare :: ", arr);

console.log("Zeroth index :: ", arr[0]);
console.log("First index :: ", arr[1]);
console.log("Second index :: ", arr[2][0]);

let arr_3 = arr[2];// ["another_1","another_2","another_3"]

console.log("Inner array eleme : ", arr_3[0]);
console.log("Inner array eleme : ", arr_3[1]);
console.log("Inner array eleme : ", arr_3[2]);

let arr_4 = ["one", "two","three"];// static decalration with elements
// traditional for loop
for (let i = 0; i < arr_4.length; i ++){
  console.log("Array element in index position " + i + " -- is -- " + arr_4[i]);
}

// for loop with in keyword
for (let index in arr_4){
  console.log("IN keyword : Array element in index position " + index + " -- is -- " + arr_4[index]);

}

// for loop with of keyword
for (let value of arr_4){
  console.log("OF keyword : Array element  -- is -- " + value);
}



let obj = new Object();
// key - value pair
// key should be unique...
obj = {"one":"1", "two":"2"};
console.log(obj["one"]);
console.log(obj["two"]);

obj["three"] = "3";

console.log(obj["three"]);

obj["three"] = "THREE";

console.log(obj["three"]);

console.log(obj);
obj["four"] = ["ar_elem_1","ar_elem_2","ar_elem_3"]
console.log(obj);


let product1 = {"id":"1", "name":"Apple laptop", "price":"50", "description":"This is high quality laptop...", "reviews":[{"count":4, "comment":"best laptoop ever"},{"count":2, "comment":"good laptoop ever"}] }
let product2 = {"id":"2", "name":"Apple Iphone", "price":"50", "description":"This is high quality Iphone...", "reviews":[{"count":4, "comment":"best laptoop ever"},{"count":2, "comment":"good laptoop ever"}] }


let products = []

products.push(product1)
products.push(product2)


console.log(products);

for(let product of products){

  console.log("Price : ",product["price"]);
  console.log("Name : ",product["name"]);
  console.log("description : ", product["descriptio"]);
}


for(let index in products){

  console.log("Index is ::  ",products[index]["price"]);
}


let map = {"Amazon":
{
  "Electronics":["Apple Iphone", "Laptop"],
 "Clothings":["Shirts","Tshirts"]
}
}

// map = {"Amazon":["Electronics"]}
