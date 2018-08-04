"use strict";

function Person(name,lName)
{

	this.name = name;
	this.lName = lName;

	this.get_full_name = function(){

	    return this.name + " " + this.lName;
	}
}


Person.prototype.get_full_name_prototype = function(){

    return this.name + " " + this.lName;
}


var lokesh = new Person("lokesh", "Modi");
var prashant = new Person( "Prashant", "Shrivastava");

console.log("herer: ", lokesh);
console.log("full name ", lokesh.get_full_name(), lokesh.get_full_name_prototype());
console.log("full name of prashant ", prashant.get_full_name(), prashant.get_full_name_prototype());



// var prashant = {};
// Person.call(prashant, "Prashant", "Shrivastava");
// console.log(prashant);
