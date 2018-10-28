function m1(name){


	return function(){
		
		console.log("This is closure scope :: ", name, arguments);
	}

}

var func = m1("param...");
// hell lot of code
// db 
// 

func("asd");
//console.log(func);
var arr = [];



for(var i = 0; i <= 10; i++){

	(function(){
		
		var j = i
		arr[i] = function() {
				return j;
			}
	
	})();
	

}



console.log(arr[0]());

console.log(arr[1]());

console.log(arr[2]());

