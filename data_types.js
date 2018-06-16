

var a = null;
var b = undefined;

console.log("null == undefined = ", a == b);


var a = "string";
var num = 5;
var flag = true;


console.log("String concatination + " + a);
console.log("String concatination ',' " , a);
console.log(`String concatination using \`  ${a} `);

console.log("String + number : ", ( a + num));
console.log("String + boolean : ", ( a + flag));
console.log("number + boolean : ", ( num + flag));




var arr = ["123","143"]

var arr_new = new Array(5);

var arr_new = new Array(34,455);

console.log("iteration using c style ...");
// c style for loop iteration.
for(var i = 0; i < arr.length; i++){

	console.log("Items :: ", arr[i]);
}


// in
console.log("iteration using in operator...");

for(var item in arr)
{

	console.log("Items :: ", arr[item]);

}



// of

console.log("iteration using of operator..");
for(var item of arr){

	console.log("Items :: ", item);

}

// Object. JSON. java script object notifier.
var sneh = {};
console.log("Object initialization :: ", sneh);

var codesNbugs = {"key_1": "value_1"};
console.log("Object initialization with values :: "+ codesNbugs);
console.log("Accessing key: key_1 : ", codesNbugs["key_1"])

var codesNbugs = {"key_1": [123,123]};
console.log("Accessing key: key_1 : ", codesNbugs["key_1"])


var codesNbugs = {"key_1": "value_1", "key_1":"value_2"};
console.log("Accessing key: key_1 : ", codesNbugs["key_1"])

// considering null as a string
var codesNbugs = {null: "value_1", asd:"adsasd"};
console.log("Accessing key: null : ", codesNbugs)

var a = 1231;
var codesNbugs = {a: "value_1"};

console.log("Accessing key: a=null : ", codesNbugs)

// addition(1,2);

function addition(argument_a, argument_b) {
	// body...
	console.log("Addition : " ,(argument_b + argument_a))

//return 0;
}
var result = addition(1,2);
console.log(result);
// ---------- continue on objects....


var key_1 = "value_1";
var key_2 = "value_2";

var obj = {key_1, key_2};

console.log("Object literal type definition.....",obj );



var obj = {
key_1:function (){

	console.log("This is function inside an object.....");
}
}


console.log("Function should be returned.....", obj["key_1"]);


obj["key_1"]();



var obj = {
key_1:function (arg_1){

	console.log("This is function inside an object.....", arg_1);
}
}
obj["key_1"]("hey argument is passed....");


var obj = {key_1,key_2};
console.log("Normal object printing :: ", obj);
for(var i = 1; i <= Object.keys(obj).length; i++){

	var key  = "key_"+i;
	// obj[key]
	console.log("Simple iterations:  ", obj[key]);
}


// for in....
for(key in obj){

	console.log("for in obj :: ", key, obj[key]);
}


// for of

for(key of Object.keys(obj)){

	console.log("for of obj :: ", key, obj[key]);
}


Object.keys(obj).forEach(

	function (key){

		console.log("keys found using for EACH :: ", key, obj[key]);
}

);

Object.values(obj).forEach(

	function (value){

		console.log("Return values presents inside objects Object.values(obj) : ", value);
	}

)


Object.entries(obj).forEach(

	function ([key,value]){

		console.log("Return key and values presents inside objects Object.entries(obj) : ", key, value);
	}

)
