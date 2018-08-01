// b.module.js.a

"use strict";

var bModule = require('./b.module.js');
var a = {"A":"A variable inside module a."}

//bModule();
bModule.m1();
bModule.m2();
console.log("A: ", a, bModule);

// TODO: main.js
// require db.js
// call db.generateSelectQuery()
// call db.generateInsertQuery()
