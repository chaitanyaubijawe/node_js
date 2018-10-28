// World map:
// {"IND":{ "MP" :["Jabalpur"], "MAH":["Pune"]} , "US":{"CT":["danbury.."]} }
var worldMap = {IND : {"MAH":["Pune"]}}
var stateMapOfIndia = worldMap['IND'];

//stateMapOfIndia = {"MAH":["Pune"]}

var wMap={};
var sMap={};
var mahCities =[]
var mpCities=[];


mahCities = ["Pune","Mumbai"];
sMap["MAH"] = mahCities;

mpCities=["Bhopal","Indore"];
sMap["MP"] = mpCities;


var keralCities = [];
keralCities=["kochi","trivendrum"];
keralCities.push("Kochi1");

sMap["KERLA"] = keralCities;


wMap["IND"] = sMap;

var CFcities=[];
var sUSMap ={};

CFcities.push("AAA");
CFcities.push("BBB");
CFcities.pop();
CFcities.push("CCC");

sUSMap["California"] = CFcities;
wMap["US"] = sUSMap;

//console.log("World Map " ,wMap);

for (var country in wMap)
{
  console.log ("countries " , country);
  var sMap = wMap[country];
  for (var state in sMap){
    var cities = sMap[state];
    console.log ("\tstates " ,state);

    for (var city in cities){
      console.log("\t\tcities " ,cities[city]);
    }
  }
}



var citiesOfMah = stateMapOfIndia['MAH'];

// citiesOfMah = ['Pune']




// here....
