"use strict";
var w_map = {
  "IND": {
    "MAH": ["PUNE", "Mumbai"],
    "MP": ["Jabalpur", "Indore"],
    "UP": ["Agra", "Jhansi"]
  }
}

var wMap = {};
var sMap = {};
var mahCities = [];
// mahCities = ["Pune"]

var mpCities = [];
var upCities = [];



mahCities.push("Pune");
mahCities.push("Mumbai");

mpCities.push("Jabalpur");
mpCities.push("Indore");

upCities.push("Jhansi");
upCities.push("Agra");


sMap["MAH"] = mahCities;
sMap["MP"] = mpCities;
sMap["UP"] = upCities;

wMap["IND"] = sMap;


//console.log(wMap);


var populateCities = function(stateName) {
  // db connection. it will execute a qiuery in dnb // select * from cities where state = "MAH";
  var cities = [];

  for (var num = 0; num <= 9; num++) {
    var city = stateName + "-city-" + num;
    cities.push(city);
  }
  return cities;
}


var populateStateMap = function() {
  var states = ["MAH", "UP", "MP"];
  var sMap = {};

  for (var state of states) {

    sMap[state] = populateCities(state);
  }

  return sMap;
}

var populateWMap = function() {
  var countries = ["IND"];
  var wMap = {}

  for (var country of countries) {


    wMap[country] = populateStateMap();
    //wMap["IND"] = sMap;
  }

  return wMap;

}

var displayWMap = function() {

  var wMap = populateWMap();

  for (var country in wMap) {

    console.log(country);
    var sMap = wMap[country];

    for (var state in sMap) {
      console.log('\t', state);
      var cities = sMap[state];

      for (var city of cities) {
        console.log('\t\t', city);
      }
    }
  }
}

displayWMap();

// TODO: populateStateMap(countryName)
// TODO: populateCities(stateName, countryName)// "IND-MAH-Citi-1", "IND-MAH-Citi-2"...."IND-MP-Citi-1"

// Ind:
// MAH:
//     PUNE
//     Mumbai
// MP:
//     Indore
// UP:
//

// changes to map

"use strict";
var worldMap = {"IND" : { "MAH":["Pune","Nasik","Mumbai"], 
                          "MP" :["Bhopal","Indore","Gwalior"], 
                          "UP" :["Lucknow", "Agra", "Kanpur"] 
                         } 
                }  
var wMap = {};
var sMap = {};
var mahCities = [];
var mpCities = [];
var upCities = [];

mahCities = ["Pune","Nasik", "Mumbai"];
sMap["MAH"] = mahCities;

mpCities = ["Bhopal", "Indore", "Gwalior"];
sMap["MP"] = mpCities;

upCities = ["Lucknow", "Agra", "Kanpur"];
sMap["UP"] = upCities;

wMap["IND"] = sMap;

console.log("World Map :", worldMap);
