// Step -1
let express = require("express");
// body parser:: step-1
let parser = require("body-parser");
// body parser:: step-2
let bodyParser = parser();

console.log(express);
// Step -2
let app = express();
// body parser:: step-3
app.use(bodyParser);

// Step -3- Start
// call from browser
// http://localhost:8080/m1
app.get('/m1/:id', function m1(req, res){

  // this is path param.
  let id = req.params.id;
  // this is query param.
  let seachQuery = req.query.seachQuery;
  // call this API as
  // URL: /m1/:id?searchQuery=12323
  // swagger.....
  console.log("This piece of code is called via browser.....", id,  seachQuery);
  res.send({"hi":"there"});
});


app.delete('/m1/:id', function m1(req, res){

  // this is path param.
  let id = req.params.id;
  // this is query param.
  let seachQuery = req.query.seachQuery;
  // call this API as
  // URL: /m1/:id?searchQuery=12323
  // swagger.....
  console.log("This piece of code is called via browser.....", id,  seachQuery);
  res.send({"hi":"there"});
});


// call from postman
// request type post
app.post('/m1/:id', function m1(req, res){
  let id = req.params.id;
  // this is query param.
  let seachQuery = req.query.seachQuery;

  let reqBody = req.body;

  console.log("POST:: This piece of code is called via browser.....", reqBody);
  res.send({"hi":"there :  This is post..."});
});

app.put('/m1/:id', function m1(req, res){
  let id = req.params.id;
  // this is query param.
  let seachQuery = req.query.seachQuery;

  let reqBody = req.body;

  console.log("POST:: This piece of code is called via browser.....", reqBody);
  res.send({"hi":"there :  This is post..."});
});
// Step -3- Ends

// Step -4
app.listen(8080, function (err) {

  console.log("server started:::::")

});
