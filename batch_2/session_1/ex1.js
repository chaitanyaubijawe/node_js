// Exercise -1
// string "1,2,3,5";
// string "1:2:3:5";
// string "1|2|3|5";

let arr = [1, 2, 3, 4, 5];
console.log("string " + `"` + arr.join(",") + `"`);
console.log("string " + `"` + arr.join(":") + `"`);
console.log("string " + `"` + arr.join("|") + `"`);

// Exercise 2

//  string:: "key_1 = value_1, key_2 = value_2;"
//  string:: "key_1 = value_1, key_2 = value_2, key_3 = value_3;"

obj = {"Aarti":"12", "Rajput":"15"};
console.log(JSON.stringify(obj));
for(let key in obj){
  console.log("string :: " + `"` + key +'='+ obj[key] +`"`);
}
