var animal = {"kind":"Human"};

console.log(animal.__proto__);
console.log(animal.kind);

var obj = {"name":"Chaitanya"};

animal.__proto__ = obj;

console.log(animal.__proto__);

console.log(animal.name);
animal.name = "CNB";
console.log(animal.name);
console.log(obj.name);
