class Person{


    constructor(name, lName){

        this.name = name;
        this.lName = lName;

    }

    getFullName(){
        return this.name + " " + this.lName;
    }

}


var lokesh = new Person("Lokesh", "Modi");

console.log("---- ", lokesh);


class Developer extends Person{


    constructor(name, lName, language){

    super(name, lName);

    this.language = language;
    }

}

var prashant = new Developer("Prashant", "Shrivastava", "Python");


console.log("Developer", prashant);