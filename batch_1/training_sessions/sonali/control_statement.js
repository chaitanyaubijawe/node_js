var m1 = function () {

  for(var i = 0; i < 10; i ++)
    {


      if(i === 5)
      {
        break;
      }

      console.log("Hey looping No. Of :: ", i, " times...");


    }

    console.log("After break expressions after loops will be executed....");

}

var undef = m1();

console.log("Non return catched in ref variable :: ", undef);



var m2 = function () {

  for(var i = 0; i < 10; i ++)
    {


      if(i === 5)
      {
        return i;
        console.log("Return :: expressions after return statement will NOT BE executed....");
      }

      console.log("Hey looping No. Of :: ", i, " times...");


    }

}

var value_returned = m2();

console.log("Value returned :: ",value_returned);


// difference between return and break::
// return can be written inside any block......
// where as break can be used only within loops. for, while..



var m3 = function () {

  for(var i = 0; i < 10; i ++)
    {


      if(i === 5)
      {

        console.log("Skipping 5 number... (continueing on number === 5)");
        continue;
        console.log("Continue ::  expressions after continue statement will NOT BE executed....");
      }

      console.log("Hey looping No. Of :: ", i, " times...");


    }

}

m3();



var m4 = function (expr) {

  console.log("Switch case statement... ");

// var expr = "sdsd";
  switch(expr)
  {
    case "hello":
      console.log("Inside hello case :: ");
      break;
    case "hi":
      console.log("Inside hi casse ::");
      break;
    case "both_1":
      console.log("Both case_1::");
    case "both_2":
      console.log("Both case_2::");
      break;
    default:
      console.log("Hello default case...");
      break;

  }

  //TODO: HW....
  // if(true){
  //
  // }else if(false){
  //
  // }

}

m4("hi");
m4("hello");
m4("both_1");
m4("both_2");
m4("defualtttttt");
