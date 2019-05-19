function m1(arg){


  return function () {

    console.log("Hi there!! ", arg);
  }
}


var ret_1 = m1("Kalyani_1!!");
var ret_2 = m1("Kalyani_2!!");
ret_1();
ret_2();



var arr = [];

for(var i = 0 ; i<= 5; i ++){



  (function(){
    var j = i;
    arr[i] = function (){
      return j;
    }
  })();

}

var m1 = arr[0]();
var m2 = arr[1]();
var m3 = arr[2]();
console.log(m1);
console.log(m2);
console.log(m3);
