var a = 10;
var obj = {"1":"one"};

function m1(arg_a, arg_obj){
	
	console.log("Before :: ", arg_a, arg_obj);
	arg_a = 50;
	arg_obj = {};
	console.log("After :: ", arg_a, arg_obj);
}

m1(a, obj);

console.log("After method call :: ", a, obj);
