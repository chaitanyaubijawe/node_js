function m1(arg, arg_2){

  console.log("m1", arg);

  // m2("10,000")
  arg_2("10,000")
}

m1("5000", function m2(arg) {

  console.log("m2", arg);
});
