// Exercise: {"IND":{"MAH":["City_1", "City_2"]}}
world_map = {"IND":{"MAH":["City_1", "City_2"]}};

// you can ask for any country and any state:
let getCities = function (country, state){

  // STEP-1 : create a container....
  let cities = [];

  // STEP-2 : create a city....
  // let cityName1 = getCityName("IND", "MAH", "CITY_1", "-");
  // let cityName2 = getCityName("IND", "MAH", "CITY_2", "-");
  // let cityName2 = getCityName("IND", "MAH", "CITY_2", "-");
  // let cityName2 = getCityName("IND", "MAH", "CITY_2", "-");
  // let cityName2 = getCityName("IND", "MAH", "CITY_2", "-");
  // let cityName2 = getCityName("IND", "MAH", "CITY_2", "-");
  // let cityName2 = getCityName("IND", "MAH", "CITY_2", "-");
  // let cityName2 = getCityName("IND", "MAH", "CITY_2", "-");
  // let cityName2 = getCityName("IND", "MAH", "CITY_2", "-");
  // let cityName2 = getCityName("IND", "MAH", "CITY_2", "-");

  // STEP-3 : add city to container.....
  // cities.push(cityName1);
  // cities.push(cityName2);

  // STEP-4 handover that container to outside world...
  //return cities;

  for(let i = 1; i <= 10; i++){

    //let cityName = country + "_" + state + "_" + "city_" + i;
    let cityName = getCityName(country, state, "city_"+i, "-");
    // log here.....
    //console.log(cityName);
    // adding elements to array(container....)
    cities.push(cityName);

  }

  return cities;
//console.log(cityName);
}

let getCityName = function (country, state, city, separator) {

  // return type is string....
  //return country + "_" + state + "_" + city;
  let cityName = country + separator + state + separator + city;
  return cityName;
}


// let cityName1 = getCityName("IND", "MAH", "CITY_1", "-");
// let cityName2 = getCityName("IND", "MAH", "CITY_2", "-");
// let cityName3 = getCityName("IND", "MAH", "CITY_3", "-");
// let cityName4= getCityName("IND", "MAH", "CITY_4", "-");
// let cityName5 = getCityName("IND", "MAH", "CITY_5", "-");
// console.log(cityName1, cityName2, cityName3,cityName4,cityName5);

 let citiesMP = getCities("IND", "MP"); // 10 cities...
// let citiesMAH = getCities("IND", "MAH");
//
 console.log(citiesMP);
 // console.log(getCities("IND", "MP"));
// console.log(citiesMAH);
