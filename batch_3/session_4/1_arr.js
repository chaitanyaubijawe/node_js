var arr = [];

// arr[0] = "STring";
// arr[1] = "1";
// arr[2] = 4;
// arr[1] = "ONE";

// console.log(arr);

// for (var i = 0; i <= 5; i ++){
//
//   arr[i] = "Value_" + i;
//   arr[i] = "AnotherValue_" + i;
// }


arr[0] = function () {
  return 0;
}

arr[1] = function () {
  return 1;
}

arr[2] = function () {
  return 2;
}

console.log(arr);

console.log(arr[0]());
console.log(arr[1]());
console.log(arr[2]());
