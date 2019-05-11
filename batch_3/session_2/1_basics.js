function abc(){

  console.log("inside abc.....");

  return function xyz(){
    console.log("inside xyz.....");
    return 5;
  }
}


let xyz = abc()();

console.log(xyz);

// let result = xyz();
//
// console.log(result);
//
// console.log(xyz());
