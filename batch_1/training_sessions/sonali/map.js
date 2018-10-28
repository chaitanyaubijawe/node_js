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

console.log("World Map :", wMap);

var getCities = function (stateName,countryName )
    {

       var cities = [];
    
       for(var num = 1; num<=10 ; num ++)
        {

           var city = countryName + stateName + "CITY" + num ;

            cities.push(city);
        }

        return cities;
 }

     var populateStateMap = function()
      {
      	var states = ["MAH", "UP", "MP"];
      	var sMap = {};

      	for(var state of states)
      	{
      		sMap[state] = getCities(state);
      	}
      	  return sMap;
      }

      var populateWMap = function()
      {
      	var countries = ["IND"];
      	var wMap = {};

      	for(var country of countries)
      	{
      		wMap[country] = populateStateMap();
      	}
      	  return wMap;
      }

      var displayWMap = function()
      {
      	var wMap = populateWMap();

      	for(var country in wMap)
      	{
      		console.log(country);
      		var sMap = wMap[country];

      		for(var state in sMap)
      		{
              console.log('\t', state);
              var cities = sMap[state];

              for(var city of cities)
              {
              	console.log('\t \t', city);
              }
      		}
      	}
      }
       displayWMap();



