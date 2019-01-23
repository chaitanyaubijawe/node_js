let v1 = require("express");

let app = v1();

app.get('/m2', function m2 (req, res){

  console.log("This code is via browser");
  res.send({
    "Good":"Morning"
  });
});


app.post('/m2', function m2(req, res){

console.log("POST:this code is called via browser");
res.send({
  "hi" : "there : this is post query"
});
});

app.listen(8080, function(err){
  console.log("server started------");
})
