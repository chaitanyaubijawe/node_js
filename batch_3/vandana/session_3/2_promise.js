

function test(){

  let p =  new Promise(

    function(resolve, reject){
      console.log("1. START PROCESSING.... INSIDE PROMISE..... ");
      setTimeout(
        function(){
          var shouldReject = true;
          if(shouldReject){
            console.log("2. REJECTION Step by step execution...");
            reject("Rejected your promise.....");
          }else{
            console.log("2. Step by step execution...");
            resolve("Hey Promise has been resolved....");  
          }


      }
      , 5000);


      // resolve({"dbCOn":connection});
      // resolve([]);
    }
  );

  return p;
}


test().then(
  function (dataSuccess)
  {

    console.log("3. Hey resolved with data :: ", dataSuccess);
    console.log("This will be executed....");
  }
).catch(
  function(dataError)
  {

    console.log("Hey resolved with data :: ", dataError);
  }
)
