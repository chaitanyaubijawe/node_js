class Bank {

  constructor(name, totalAccounts){
    this.name = name;
    this.totalAccounts = totalAccounts;
  }


  getName(){

    return this.name;
  }

  getTotalAccounts(){

    return this.totalAccounts;
  }

}


var bank = new Bank("RBI", "56789");

console.log(bank);
console.log(bank.getName());
console.log(bank.getTotalAccounts());
