"use strict";

function Person(name,lName)
{


	this.name = name;
	this.lName = lName;
}


Person.prototype.get_full_name = function(){

    return this.name + " " + this.lName;
}



function Developer(name, lName, language){

    Person.call(this, name, lName);// inehritance...
    this.language = language;

    this.get_details= function(){

        return this.name + " " +this.lName + " " + this.language  
    }
        
}

Developer.prototype = Person.prototype;

// create...

var lokesh = new Developer("Lokesh", "Modi", "NodeJs");

console.log(lokesh.get_details());
console.log(lokesh.get_full_name());
