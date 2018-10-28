


"use strict";

function m1(){



    let a = undefined;
    try{
      // console.log( syntactical errors are not caught in try and catch ...
    //  a = a.slice(0,-1);
      console.log(a);

    }
    catch(e){

      console.error("Error is :: -- :: ", e.message);
    }
    finally{

      console.log("Inside finally block.....");
    }



}

m1();


function m2(){



    let a = undefined;
    try{

      a = a.slice(0,-1);
      console.log(a);

    }

    finally{

      console.log("Inside finally block.....");
    }



}




function m3(){



    let a = undefined;
    try{

      a = a.slice(0,-1);
      console.log(a);

    }

    finally{

      console.log("m3::::: Inside finally block.....");
    }



}


try{

  m3();
}
catch(e){
  console.error("m3::: Error is :: -- PARENT CALLER -- :: ", e.message);

}
finally{
  console.log("m3::: Inside finally block..... PARENT CALLER");

}




function m4(){
  let a = undefined;

  for(let i=0;i<= 5; i++){

      try{

        throw "error";
        //throw {};
        //a.slice(0,-1);
          if(a==2)
          {
            continue
          }
        // break
        // return
        // throw
      }catch(e){

        console.log(e);

      }finally{

          console.log("is this called?");
      }


  }
}


m2();
