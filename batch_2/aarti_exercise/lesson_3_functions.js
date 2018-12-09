function m1(sep){
return "hello_" + sep;
}

let result = m1(1);
let result2= m1(2);
let result3= m1(3);
let result4= m1(4);
let result5= m1(5);

//console.log(result, result2, result3, result4, result5);

let arr = [];

arr.push(result);
arr.push(result2);
arr.push(result3);
arr.push(result4);
arr.push(result5);
//console.log(arr);

// using for loop

function m2(sep){
  return "hello:" + sep;
}

let arr2 = [];
for(let i = 1; i <=2; i++){
  let result1 = m2(i);
  //console.log("Used for loop :: ", result1);
 arr2.push(result1);
}
//console.log("Used for loop :: ", arr2);

function m3(){
  let arr_2 = [];
for(let i = 1; i <= 5; i++){
  let result = m2(i);
  console.log(result);
}
}
