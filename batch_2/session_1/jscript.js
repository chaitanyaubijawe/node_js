let a = 2;
let b = 3;

let c = a + b;
  console.log(c);

let n = "abc";
console.log(n[0]);
console.log(n[1]);
console.log(n[2]);

let fName = "Aarti";
let lName = "Rajput";

let fullname = fName + " " + lName;

console.log("My fullname is ", fullname);
console.log(`Fullname is  ${fullname}`);

let flag = true;
console.log("Value of flag boolean is ", flag);
flag = false;
console.log("Value of flag boolen is ", flag);
flag = "this is india";
console.log("Value of ffalg boolean is ", flag);

console.log("concatination ", flag + " - - " + fullname);

let num = 1;
console.log("Number , ", num);

console.log("Number, ", num, fullname);
flag = true;
console.log("number,", num, flag);
flag = false;
console.log("this is a ", num, flag);


let arr = [];
console.log("Array:", arr);
arr = [2,3]
console.log("Array::", arr);
arr = new Array();
console.log("Array is", arr);
arr = new Array(4);
console.log("Array :", arr);
arr = new Array(4,6,8,10)
console.log("Array is", arr);

console.log("oth element of index", arr[0]);
console.log("2nd element is", arr[1]);
console.log("Element of array", arr.pop(), arr);

// pop() removes last element on the array
// // QUESTION:
// Can pop remove any specified element

arr.push(7);

console.log("Element at 0th index", arr);

// push is used to add element in array
// iteration.....

let x = [];
x = [1,2,3,4,5];

for (let i=0; i < x.length; i ++){

  console.log("Index is :",  i); /// place (index of the array)
  console.log("Arr index is::", x[i]); /// Value of the array
}

console.log("operators < ", 5 < 6);
console.log("operators < ", 5 > 6);

let lastIndex = x.length - 1;

console.log("Value of last index is :: ", lastIndex);
console.log("Last index is less than = 0 (lastindex <=)", lastIndex >= 0);

for(let i = lastIndex; i >= 0; i--)
{
console.log("Index REVERSE order:: ", i);
}

for (i=0 ;i<=1 ;i++)
{
  console.log("The number is:: ", i);
}

/// IN / OF value

for(let value in x){
  console.log("Index using IN operator ::", value, x[value]);
}

for(let value of x){
  console.log("Access array element using OF operator:", value);
}

//object

let obj = {};
console.log("object def:", obj);

m = {fName, lName};
console.log("Object def:", m);
console.log("fetch value present against key in Object::", m['fName'] );

//object keys holding another Object
obj = {"key_1":{}, "key_2":{"hello world":{}}};
obj = {"key_1":{}, "key_2":{"hello world":{"Hello":"value1"}}};  
obj = {"key_1":[], "key_2":[]};

y = {"key_1":"Good", "key_2":"Morning"};
for(let key in obj){
console.log("key inside object is:", key, y[key]);
}


//ask
//let user = {
  //name: "John",
  //age: 30,
//  isAdmin: true
//};

//for(let key in user) {
  // keys
  //alert( key );  // name, age, isAdmin
  // values for the keys
//  alert( user[key] ); // John, 30, true
//}
