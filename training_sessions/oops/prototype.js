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
