// npm install express --save
const express = require("express");
const app = express();

app.get("/info", function(req, res){

  res.send("hello from GET API");

});


app.post("/sonali/info", function(req, res){

  res.send("hello from POST API");

});


app.put("/info", function(req, res){

  res.send("hello from PUT API");

});


app.listen(3000, function(){

  console.log("Listening on port 3000");
});
