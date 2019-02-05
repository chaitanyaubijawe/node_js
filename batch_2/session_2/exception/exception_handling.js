// infinity....
//a = 4/0;
function a(){

  try{

    console.log("this is try block....");
    a = undefined;
    return "sdfasd"
    //a.m1()

  }catch(error){

    console.log("Error occured:: ", error);
    a = "this is variable";
    // any js expressions here...
  }
  finally{
      // clean up code comes here...
      console.log("this will finally block will be executed at all condition");
  }

  console.log("Why this line.....", a);
}


a();



for(let i = 0; i <= 5; i ++){



  if(i === 2){

    //continue;
    //break;
    return 2;
  }

  console.log("This is :: ", i);
}
