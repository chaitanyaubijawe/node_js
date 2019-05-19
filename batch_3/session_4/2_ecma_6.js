

class Person{

  constructor(name, lName){

    this.name = name;
    this.lName = lName;

  }

  walk(){

    console.log("inside walk name is :: ", this.name);
  }

}

var chatanya = new Person("Chaitanya", "Bijawe")
chatanya.walk();
