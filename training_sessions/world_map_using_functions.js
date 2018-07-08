var  getCitiesByStateName = function (stateName){

    var cities = [];

    for(var num = 1; num<=10 ; num ++)
    {

        var city = stateName + "_CITY_" + num ;

        if(num == 5){
          //continue;
          break;
          //return ;//cities;
        }
        cities.push(city);
    }

    return cities;

}


var mahCities = getCitiesByStateName("MAH");
var mpCities = getCitiesByStateName("MP");
var ctCities = getCitiesByStateName("Connecticut");
var cfaCities = getCitiesByStateName("California");

var getStateMap = function (countryName) {

  var stateMap = {};

  if(countryName === "IND"){
    stateMap["MAH"] = mahCities;
    stateMap["MP"] = mpCities;
  }else if( countryName == "USA"){
    stateMap["Connecticut"] = ctCities;
    stateMap["California"] = cfaCities;
  }

  return stateMap;
}


var getWorldMap = function () {

  var worldMap = {};

  var indStateMap = getStateMap("IND");
  var usStateMap = getStateMap("USA")

  worldMap["IND"] = indStateMap;
  worldMap["USA"] = usStateMap;

  return worldMap;

}


var worldMap = getWorldMap();


var printWorldMap = function (worldMap) {

  // write logic here to print your map. Dont just use console.log();

  console.log(worldMap)
}


printWorldMap(worldMap);

// switch case
var expression  = "abc"
var expression  = "xyz"
var expression  = "pqr"
var expression  = "stu"
var expression  = "sse"
var expression  = 4

switch(expression){
  case "abc":
      console.log("Exression evaluated as abc");
      break;
  case "xyz":
      console.log("Exression evaluated as ", expression);
      break;
  case "pqr":
  case "stu":
      console.log("Both pqr and stu");
      break;
  case 4:
      console.log("integer..");
      break;
  default:
      console.log("No matching expression found...");
      break;
}
