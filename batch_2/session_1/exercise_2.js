function m1(separator){


  return "hello_" + separator ;
}

let result = m1(1);
let result2 = m1(2);
let result3 = m1(3);
let result4 = m1(4);
let result5 = m1(5);

console.log(result,result2,result3,result4,result5);
let arr = [];

arr.push(result);
arr.push(result2);
arr.push(result3);
arr.push(result4);
arr.push(result5);
console.log(arr);


function m2(separator) {

  return "hello_" + separator;
}


let arr_2 = [];
for(let i = 1 ; i <= 5 ; i++){

  let result  = m2(i);
  console.log("using for loop :: ", i, result);
  arr_2.push(result);
}


function m3() {
  let arr_2 = [];// array : Type
  for(let i = 1 ; i <= 5 ; i++){

    let result  = m2(i);
    console.log("M3: using for loop :: ", i, result);
    arr_2.push(result);//collect elements here....
  }
  return arr_2; // return that array....
}

console.log(m3());
console.log(m3());
console.log(m3());
console.log(m3());
console.log(m3());
console.log(m3());
console.log(m3());
console.log(m3());
console.log(m3());




for(let i = 1 ; i <= 5 ; i++)
{
  let arrayFor = [];// redeclaired...... every time inside for loop...
  let resultFor = "abc_ " + i;

  arrayFor.push(resultFor);

  console.log(arrayFor);

}


//console.log(resultFor);
