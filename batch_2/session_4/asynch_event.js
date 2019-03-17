function m(cb){


  setTimeout(function () {
    cb("completed....")
    console.log("Called after 2 sec...");
  }, 2000)

  console.log("this will print first....");
}


// m(function(data){
//
//   console.log("hey now igot data.....", data);
//
//   // do things.....
// })
//
//
// console.log("this will print second....");
//




function m_promise(){


  return new Promise(function (resolve, reject) {

    setTimeout(function () {
      resolve("completed....")
      console.log("Called after 2 sec...");
    }, 2000)


  })
  console.log("this will print first....");
}



m_promise().then(function(data){

  console.log("Resolved......");
}).catch(function (err) {

  console.log("Error:::", err);

})
