"use strict";
//NODE: by default this referes to global node object. Which is empty.
//Browser: by default this referes to global window object.
console.log(this);

function m1(arg, arg2){
	//If not used with "use strict"
	// this refers to context from which method is being called or a objecte is refered..
	// this inside a method gives you shadow node objects which is filled with default variables and object populated by node at runtime
	// so when someone call m1() from script it will attach node context object to it. And then this will be refering to that object(context).
	// With "use strict"
	// "use strict" will make value of this as undefined inside a function..
	console.log(this, arg2);
	console.log(arg);
	//arguments : is array of arguments passed to an function. It is populated by js engine at runtime.
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
