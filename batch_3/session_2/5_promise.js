// setTimeout(() => {console.log("First")}, 5000);
//
// setTimeout(() => {console.log("Third!!");}, 1000)
//
// console.log("Second");



function m1() {

  console.log("Inside m1");

  let promise = new Promise(

    function (resolve, reject) {


      return resolve("RESOLVE");
    // return reject("REJECT");
  }

);

  return promise;
}

let result = m1().then(function (data) {

  console.log("Here promise is resolve with data -- ", data);
  // here i can do rest of the work....s

  console.log("do any stuff over here....");
});

//console.log(":ASYNC:AFTER RETURN:: ", result);
