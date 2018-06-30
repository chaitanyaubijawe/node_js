var arr = new Array(3);
if(arr.length >= 1)
{
  arr[0]; // bad practice...

}
arr[0] = "zeroth index...";
arr.push("fourth..");


var sixtElement = arr[6];

console.log(sixtElement);

for(var index in arr)
{

  console.log("Index is :: " + index + " -- value is :: " + arr[index]);


}

for(var index = 0; index < arr.length ; index++)
{

  console.log("Traditional for loop :: Index is :: " + index + " -- value is :: " + arr[index]);


}




for(var jePahijeTe of arr)
{

  console.log(" -- value is :: " + jePahijeTe);

}
////////// Object....////////

var obj = new Object();
var obj = {};
var obj = {"name_1" :"value_1"};

obj ["name_2"] = "value_2";


console.log("Simple Obnject definition and adding property ::", obj);

var name = "Chaitanya";
var name_2 = "Lokesh";
obj = {name, name_2};


console.log("Object literal with ref variable as  key and value... ::", obj);


for(var propertyName  in obj){

  console.log("Object iteration using in.... propertyName :: " +  propertyName + " --- value is --- " + obj[propertyName]);

}



// does not work.........

/*for(var value of obj){

  console.log("Object iteration using of.... propertyName :: " + value);

}
*/
var obj = {name_1:"value_1", name_2:"value_2"};
console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj));


var arr = [1,2,3,4];

arr.forEach(

	function(value){

		console.log("Values inside array.... ", value);
	}

)



var forEach = function(fn)
{

/*var fn = function(value){
	console.log("Logging arguments... ", value)
}*/


for(var i=0;i< arr.length; i ++)
{

	//console.log("iterating over array ", arr[i]);
	fn(arr[i]);
}


}



forEach(function(value){
	console.log("Logging arguments... ", value)
});




/*forEach(

	function (value){
			console.log("Hey we are iterating over an array :: ", value);
		}

)*/
