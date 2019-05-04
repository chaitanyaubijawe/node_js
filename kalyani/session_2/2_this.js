// let M = function(){
//
//   console.log("m1");
//
//   this.name = "Hi there!!"
//   this.init = function(){
//     console.log("Initialize function......");
//   }
// }


//let m = new M();

//console.log(m);


console.log(this);


let Person = function () {

  this.name = "abc"
  // console.log(this.name);
  // console.log(this);
  this.init = function(name){
    this.name = name;

  }
}


let kalyani = new Person();
console.log("Dfault name:: ", kalyani.name);
kalyani.init("Kalyani....");
console.log("After.... ",kalyani.name);



let m4 = (function(){

  console.log(this);
  
}).bind({"name":"Kalyani"})


m4();
