var  instituteName = "codesNbugs";

console.log("printing name of institute :: ", instituteName[0]);


var str = "abcd";

var number = 123;

var add = str + number;

var flag = true;

var abc = null;
var xyz = undefined;

console.log(abc==xyz);

console.log("string + number :: ",add);
console.log("string + number :: " + add);
console.log(`string + number :: ${add}`);


var add2 = flag + str;
console.log("string + boolean :: ",add2);
var add3 = flag + number;
console.log("number + boolean :: ",add3);

var arr = new Array();

arr.push("asdasd");
arr.push(123);
arr.push({"ASD":"asda"});

arr[2] = "new added"

console.log("Array : ", arr);

var len = arr.length;

console.log("Length of array :: ", len);

//iteration

for(var i= 0; i< len; i++){

	console.log(arr[i])
}

arr = "ertdtdtetr"


for(var items in arr){

	console.log("items: ",arr[items])
}


for(var item of arr){
	console.log("items: ",item)

}
