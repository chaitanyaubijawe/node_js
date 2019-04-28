

function afterEventCOmpleted(){


  console.log("3.Hey time out has completed...");
}


function test(){

  console.log("1.Starting setTimeout");
  // 1. db connection - 5 seconds
  setTimeout(afterEventCOmpleted, 5000);
  // 3. this line wille be immediately invoked... it will not wait for success/failure of DB connection
  console.log("2.Ended registering... setTimeout");

}

test();
