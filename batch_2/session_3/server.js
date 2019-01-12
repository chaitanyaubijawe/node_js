// Step -1
let express = require("express");


console.log(express);
// Step -2
let app = express();

// Step -3- Start
// call from browser
// http://localhost:8080/m1
app.get('/m1', function m1(req, res){

  console.log("This piece of code is called via browser.....");
  res.send({"hi":"there"});
});


// call from postman
// request type post
app.post('/m1', function m1(req, res){

  console.log("POST:: This piece of code is called via browser.....");
  res.send({"hi":"there :  This is post..."});
});
// Step -3- Ends

// Step -4
app.listen(8080, function (err) {

  console.log("server started:::::")

});
