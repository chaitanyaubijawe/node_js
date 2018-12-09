// {"IND":{"MAH":["CITY_1", "CITY_2"]}}


// Step-1 : ["CITY_1", "CITY_2"]
// Step-1 : [{"productName":"iphone", "productUrl":"sdfsdf", "price":"234"}, {}]
function getCities(countryName, stateName) {
  let cityArr = [];
  for(let counter=1; counter <= 5 ; counter ++){

      let cityName = countryName + "_" + stateName + "_" + "CITY_" + counter;

      cityArr.push(cityName);
  }

  return cityArr;
}


// console.log(getCities("IND", "MAH"));
// console.log(getCities("IND", "MP"));

// Step-2 : {"MAH":["CITY_1", "CITY_2"]}


function getStateMap(countryName){
  let stateMap = {};


  if(countryName === "IND"){

    // prepare IND states map
    stateMap["MAH"] = getCities(countryName, "MAH");
    stateMap["MP"] = getCities(countryName, "MP");
    // stateMap["UP"] = getCities(countryName, "UP");
    // stateMap["KL"] = getCities(countryName, "KL");
    // stateMap["KA"] = getCities(countryName, "KA");

  }else if (countryName === "USA") {
    // prepare USA states map

    stateMap["CT"] = getCities(countryName, "CT");
    stateMap["EL"] = getCities(countryName, "EL");

  }


return stateMap;
}



// console.log(getStateMap("IND"));
// console.log(getStateMap("USA"));

// Step-3 {"IND":{"MAH":["CITY_1", "CITY_2"]}, "USA":{"CT":["CITY_1"]}}

function getCountryMap() {
  let worldMap = {}

  worldMap["IND"]= getStateMap("IND")
  worldMap["USA"]= getStateMap("USA")
  return worldMap;
}


//console.log(getCountryMap());

let worldMap = getCountryMap();
// html side to display them in good manner.....
let statesIND = worldMap["IND"]; // {}
let statesINDMPCities = statesIND["MP"]; // [ ] = worldMap["IND"]["MP"]
console.log(statesIND);
console.log(statesINDMPCities);

for(let country in worldMap){

  // key == country...
  // worldMap[country]
  let stateMap = worldMap[country]
  for(let state in stateMap)
  {

    // key == state...
    // worldMap[country][state]
    cities = worldMap[country][state] // same as below....
    cities = stateMap[state]

    for(let city of cities){

      console.log(country, state, city );
    }
  }
}


let data = {"Bestsellers":
[
  {"bookName":"harry potter", "writer":"asdas"},
  {"bookName":"harry potter", "writer":"asdas"}
],
  "Most wished for":
  [
    {"bookName":"The book thief...", "writer":"asdas"},
    {}
  ]
}

[
  {"Bestsellers":
  [
    {"bookName":"harry potter", "writer":"asdas"},
    {"bookName":"harry potter", "writer":"asdas"},
    {"bookName":"harry potter", "writer":"asdas"},
    {"bookName":"harry potter", "writer":"asdas"},
    {"bookName":"harry potter", "writer":"asdas"},
    {"bookName":"harry potter", "writer":"asdas"},
    {"bookName":"harry potter", "writer":"asdas"},
    {"bookName":"harry potter", "writer":"asdas"},
    {"bookName":"harry potter", "writer":"asdas"},
  ]
},

  {"Most wished for":
    [
      {"bookName":"The book thief...", "writer":"asdas"},
      {"bookName":"The book thief...", "writer":"asdas"},
      {"bookName":"The book thief...", "writer":"asdas"},
      {"bookName":"The book thief...", "writer":"asdas"},
      {"bookName":"The book thief...", "writer":"asdas"},
      {"bookName":"The book thief...", "writer":"asdas"},
      {"bookName":"The book thief...", "writer":"asdas"},
      {"bookName":"The book thief...", "writer":"asdas"},
      {}
    ]
  }

]
