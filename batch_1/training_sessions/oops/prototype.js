var Person = function (name, lastName) {

  this.name = name;
  this.lastName = lastName;
}

console.log(Person.prototype);

Person.prototype.sayFullName = function () {

  console.log("Hi there: ", this.name , this.lastName);
}

console.log(Person.prototype);

var lokesh = new Person("Lokesh","Modi");

lokesh.sayFullName();

var sneh = new Person("Sneh","Roy");

sneh.sayFullName();

//console.log(typeOf sneh);

var n = "sdFsdf";
console.log(n.toLowerCase());
var name = new String("CNB")
console.log(n.toLowerCase(), String.prototype);


// ECMA6- 2015




class Person1{


  constructor(name){

    this.name = name;


  }

  getName(){

    console.log("Saying hello , ", this.name);
    return this.name;
  }
}
var p = new Person1("person")
console.log(p.getName());





//////////////////////////////////////////////



"use strict";
// var a; variable hoisting.....

console.log(a)
var a = 3;
m1();

/*

function hoisting.....
var m1 = function(){
	
	console.log("Inside m1");
}
*/


function m1(){
	
	console.log("Inside m1");
}

function Person(name, lName)
{

	this.name = name;
	this.lName = lName;

}


var sneh = new Person("Sneh", "Roy");
var shrutika = new Person("Shrutika", "Pukale");

console.log("Peron.name :: --  ", sneh.name, shrutika.name);

console.log(this);

console.log("This accessing sneh...", this.sneh)
console.log("########################################")


function M(name){

	this.name = name;
	console.log("hi there ***** ...", this);

	function inside_m(){
		console.log("inside class  method...");
	
	}

	inside_m();
}

var name = "abcd";
var m = new M(name);

M.prototype.getName = function(){

	console.log("This is a function");
	return "calling from ref variable";
}


//console.log("Dekhob bhai...", )

m.getName();

