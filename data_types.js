

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

addition(1,2);

function addition(argument_a, argument_b) {
	// body...
	console.log("Addition : " ,(argument_b + argument_a))
}
addition(1,2);