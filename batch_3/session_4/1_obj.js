



function m1(name){

  this.name = name;


  this.init = function () {

    console.log("this is initialize :: ", name);
  }
  console.log(name);
}


var M = new m1("Kalyani");
M.init();
