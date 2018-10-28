function m1() {

    console.log("Inside m1....")

}

function m2(arg_cb, shouldCall) {

    if(shouldCall){

        arg_cb();
    }

}




m2(function () {

    console.log("Inside m1....")

}, true);