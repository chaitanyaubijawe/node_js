

function checkPromise(arg){

    return new Promise(function (resolve, reject) {


        // based on condition
        // you resolve promise
        // you reject promise

        if(arg === true){


            return resolve({"key":"value"});
            //console.log("stilll successsssss....");
        }else{
            return reject("Error: Something went wrong...");
            //console.log("stilll errrrorororororo")


        }

    });

}



checkPromise(true).then(function (result) {

console.log("here in then block :: ", result);
}).catch(function (err) {

    console.log("here in catch block :: ", err);

});