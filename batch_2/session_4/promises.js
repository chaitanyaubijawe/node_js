

function myPromise(arg) {

  let p = new Promise(function(resolve, reject){

      if(arg === true){


          resolve("hey promise is successfulll.......");

      }else{


        reject("hey something went wrong....");
      }

  })


  return p;
}


myPromise(false).then(function(data){

  console.log("data after resolve:: " , data);
}).catch(function(err){

  console.log("Error:  ", err);
})
