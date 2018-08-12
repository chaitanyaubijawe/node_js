function m1(arg_func){

  // execute
  // var result = []
  //var err = {}
  arg_func(err,result);

}


m1(function(){
  console.log("this is triggered within function");

});

var f = function(){
  console.log("this is triggered within function");

};


m1(f);

m1(arg => {
  console.log("this is arrow function");
})
