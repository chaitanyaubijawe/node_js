// Exercise -1
// string "1,2,3,5";
// string "1:2:3:5";
// string "1|2|3|5";
arr = [1,2,3,5];

let opp = arr.join(",");
//console.log("Using join method:: ", opp, typeof(opp));

let output = ""
let sep = ","

for (let index in arr){
console.log("Index value is ::", index, arr[index]);
output = output + sep + arr[index];
}
output = '"' + output.substring(1) + '"'
console.log("Output is ::", output);

// Exercise 2

//  string:: "key_1 = value_1, key_2 = value_2;"
//  string:: "key_1 = value_1, key_2 = value_2, key_3 = value_3;"

obj = {"Aarti":"12", "Rajput":"15"};

let output_1 = ""

for(let key in obj) {
  console.log("Key of the Object:: ", key , obj[key]); /// ask about value
  output_1 = output_1 + '"' + key + "=" + obj[key] + '"' + ",";
}

console.log("Output is::", output_1.slice(0, -1));
