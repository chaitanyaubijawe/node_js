//["City_1", "City_2"]
// {"IND":{"MAH":["City_1","City_2"]}}

function cityname(){
let cityArr = [];
for(let i = 1; i <= 5; i++){
  let city = "City_" + i;
  cityArr.push(city);
}
return cityArr;
}

//console.log(cityname());

function worldmap(){
  let indMap = {};
  let usaMap = {};
  let cities =  cityname();
   indMap["MAH"] = cities;
   indMap["MP"] = cities;
   indMap["Kerala"] = cities;

   usaMap["Florida"] = cities;
   usaMap["California"] = cities;


  let worldmap = {};
  worldmap["IND"] =  indMap;
  worldmap["USA"] =  usaMap;

return worldmap;

}
console.log(worldmap());
