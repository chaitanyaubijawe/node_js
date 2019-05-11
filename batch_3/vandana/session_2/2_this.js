
// console.log(this);

var m1 = (function () {

  console.log(this);

}).bind({"hi":"there"})

m1()


function Person(){

  this.name="";

  this.init = function (name) {

      this.name = name;

  }

  this.getName = function () {

    return this.name;
  }
}


Person.prototype.getFullName = function () {

  return this.name + " Shrivastava";

};


var Vandana = new Person();

console.log("BEFORE :: " , Vandana);
Vandana.init("Bandana...")
console.log("AFTER :: " ,Vandana.getName());
console.log("AFTER :: " ,Vandana.getFullName());



var Bank = function () {
  this.name = "";
  this.totalAccounts = "";
  this.totalHomeLoanDisbursed = "";
  this.totalInventory = "";
}

Bank.prototype.setName = function (name) {
  this.name = name;
}

Bank.prototype.init = function (name, totalAccounts, totalHomeLoanDisbursed, totalInventory) {
  this.name = name;
  this.totalAccounts = totalAccounts;
  this.totalHomeLoanDisbursed = totalHomeLoanDisbursed;
  this.totalInventory = totalInventory;
}
Bank.prototype.getName = function () {
  return this.name;
}

Bank.prototype.getTotalAccounts = function () {
  return this.totalAccounts;
}
Bank.prototype.getTotalHomeLoanDisbursed = function () {
  return this.totalHomeLoanDisbursed;
}

Bank.prototype.getTotalInventory = function () {
  return this.totalInventory;
}


var PNB_Bank = new Bank();
PNB_Bank.init("PNB", "40","30", "50000000", "23456")

console.log(PNB_Bank);
console.log(PNB_Bank.getTotalAccounts());
// ECMA6
