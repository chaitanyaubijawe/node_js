

async function m1(cb){

  setTimeout(cb,1000);

}

m1(() => {

  console.log("Hey there!!");
});

console.log("here!!");
