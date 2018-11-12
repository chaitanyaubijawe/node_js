var a = "string var";
let b = "string var";
const c = "string var";

var d = a + b; // concatination
// -----------------
let n = "abc";

console.log(n[0]); // a
console.log(n[1]); // b
console.log(n[2]); // c

let fName = "Aarti ";
let lName = "Rajput";

let fullName = fName + lName;

console.log("Full name is :: ", fullName);
console.log("Full name is:: " + fullName);
console.log(`Full name is ::   ${fullName}` );
// -------------------------
let flag = true;
console.log("Value of flag boolean is ", flag);
flag = false;
console.log("Value of flag boolean is ", flag);
// flag = "this is string....";
// console.log("Value of flag boolean is ", flag);

// concatenate boolean with string

console.log("concatenation  ", flag + " - - " + fullName);

let num = 1;
console.log("Number , ", num);


// concatenate number with string
console.log("Number , ", num + " " + fullName);
flag = true;// 1
console.log("Number , ", num + flag);
flag = false;// 1
console.log("Number , ", num + flag);


// ---- Array.....


let arr = [];
console.log("Array :: ", arr);
arr = [2,4];
console.log("Array :: ", arr);
arr = new Array();
console.log("Array :: ", arr);
arr = new Array(4);
console.log("Array :: ", arr);
arr = new Array(4,6);
console.log("Array :: ", arr);

// access element
console.log("Element at oth index ", arr [0]);
console.log("Element at oth index ", arr.pop(), arr);

arr.push(7);
arr.push(8);
arr.push(9);
arr.push(10);

console.log("Element at oth index ", arr);
// iteration......


for(let index=0; index < arr.length ; index ++ )
{


    console.log("Index is :: ", index);
    console.log("Arr Index is :: ", arr[index]);
}



console.log( "operators < ", 5 < 6);
console.log( "operators > ", 5 > 6);
let lastIndex = arr.length - 1;

console.log("Value of last index is :: ", lastIndex);
console.log( "last index is less than = 0 (lastindex <=) ", lastIndex <= 0 );
// length= 5




for(let index = lastIndex ; index >= 0 ; index -- )
{


    console.log("Index REVERSE order.. is :: ", index);
    console.log("Arr Index is :: ", arr[index]);
}

//let index2;

for(let value in arr){

  console.log("Index using in operator :: ", value, arr[value]);
}

for(let value of arr){

  console.log("Access array element using OF operator :: ", value);
}

// object.....
let obj = {};

console.log("Object def :: ", obj);

obj = new Object();

console.log("Object def :: ", obj);

obj = {fName, lName}; // object literal....
console.log("Object def :: ", obj);
console.log("fetch value present against key in Object :: ", obj['fName']);
console.log("fetch value present against key in Object :: ", obj['lName']);

console.log("fetch value present against key in Object :: ", obj['sdName']); // undefined...
console.log("fetch value present against key in Object :: ", obj.sdName);// undefined...



// object keys holding anopther object
obj = {"key_1":{}, "key_2":{"jzhdfjas":{}}};

obj = {"key_1":[], "key_2":[]};

obj = {"key_1":{}, "key_2":[]};




obj = {"key_1":"value", "key_2":"value_2"};

for(let key in obj){

  console.log("Key inside object is :: ", key, obj[key]);

}

// of operator....


// Object.keys(obj) ==> ['key_1', 'key_2'];
//                    ==> 0, 1

for(let index in Object.keys(obj)){

  console.log("index inside object is :: ", index);

}
// this index will be holding key names of object....
for(let index of Object.keys(obj)){

  console.log("key inside object is :: ", index, obj[index]);
  // obj[index] == will return you values inside the object....
}



arr = [1,2,3,5];

// Exercise -1
// string "1,2,3,5";
// string "1:2:3:5";
// string "1|2|3|5";


// Exercise -2
obj = {"key_1":"value_1", "key_2":"value_2"};

obj = {"key_1":"value_1", "key_2":"value_2", "key_3":"value_2"};

//  string:: "key_1 = value_1, key_2 = value_2;"
//  string:: "key_1 = value_1, key_2 = value_2, key_3 = value_3;"



// 10 yrs
// till february 1 offer...
//   - UI - 8(CSS/HTML/Bootstrap) 8 * 3  = 24 LPA() ( > 20)
// node js
// Angularjs(CSS/HTML/Bootstrap)
// 8 * 2 = 16 LPA
//   - Flash - 2(Animation...)
