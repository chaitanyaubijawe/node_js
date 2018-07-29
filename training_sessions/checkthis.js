"use strict";

console.log(this);

function m1(arg, arg2){
	//arguments
	console.log(this, arg2);
	console.log(arg);
}


function m2(arg_1, arg_2){

	var sum = 0;
	
	for(var i = 0; i < arguments.length; i++)
	{
	
		sum  = sum + arguments[i];
	
	}

	return sum;
	
}


var obj = {"hi":"there!"};

//console.log(m1.apply);

m1.call(obj, 1,2);

var sum  = m2.apply(null, [3,4,5]);


console.log("Sum of the arguments is: ", sum);


var m3 = function (){

	console.log(this);
}

m3 = m3.bind(obj);

m3();






