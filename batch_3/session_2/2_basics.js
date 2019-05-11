// function m2(){
//   console.log("Inside m2");
// }

function m1(arg) {

  console.log("inisdee m1", arg);

  arg();
}


// m1(1);//
// m1(m2)

m1(function (){
  console.log("Inside m2");
});


m1(() => {
  console.log("Inside arrow function...");
});
