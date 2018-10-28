console.log(module);
var Person = function(name, lastName){
  this.name = name;
  this.lastName = lastName;
  function ab() {

  }
}


Person.prototype.sayName = function () {

  console.log("My name is ", this.name);
}

console.log(Person.prototype);


Person.prototype.sayFullName = function () {

  console.log("My full name is ", this.name + this.lastName);
}


var lokesh = new Person("Lokesh", "Modi")
var sneh = new Person("Sneh", "ABC")
lokesh.sayName()
lokesh.sayFullName()
lokesh.age = 20

console.log(lokesh);
sneh.sayName()
sneh.sayFullName()
console.log(sneh);


class Person1{
constructor(name){
  this.name= name
}

getName(){

  return this.name;
}


}


var p = new Person1("ECMA-2015")
console.log(p.getName());
