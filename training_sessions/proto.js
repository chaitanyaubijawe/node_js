var animal = {kind:"human"};

//console.log(animal.kind);
//console.log(animal["kind"]);

console.log(animal.__proto__);

var obj = {};

console.log(obj.__proto__);

obj.__proto__ = animal;

console.log(obj.__proto__);


console.log(obj.kind);

obj.kind = "object and not a animal."

console.log(obj.kind);
console.log(animal.kind);

var n = {}
var anotherObj = Object.create(n, { hello :{value:"helllllloooooo...."}});
//anotherObj.hello = "hello";

console.log("another.... ", anotherObj, anotherObj.hello, n);



