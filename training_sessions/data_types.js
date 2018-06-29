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
