const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const parser = bodyParser();
const PORT = 4200;

app.use(parser);

//get API's
app.get("/products", function (req,res) {

  // db connection
  // execute queries here.....
  res.send([{"name":"iphone 2", "price" :50, "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/IPhone_5.png/200px-IPhone_5.png"},{"name":"iphone 3", "price" :500, "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/IPhone_5.png/200px-IPhone_5.png"},{"name":"iphone 1", "price" :5, "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/IPhone_5.png/200px-IPhone_5.png"}]);

});

app.get("/bandana", function (req,res) {

  // db connection
  // execute queries here.....
  res.send([{"name":"iphone 2", "price" :50, "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/IPhone_5.png/200px-IPhone_5.png"}]);

});

app.get("/kalyani", function (req,res) {

  // db connection
  // execute queries here.....
  res.send([]);

});
//get API's ends here...


//POST API's

app.post("/add/product", function (req, res) {


  console.log("request body :: " , req.body);
  // insert into product(name, price) values(request.body.name, request.body.price);
  req.body.id = 1;

  res.send(req.body);

});

//POST API's ends here...


// serve static content

app.use(express.static(__dirname +"/dist/bandana-cart/"));
// serve static content ends


// serve html

app.get("*", function (req,res) {


  res.sendFile(__dirname + "/dist/bandana-cart/index.html");
});
// serve html ends


app.listen(PORT, function (err) {
  if (err){
    console.log("Error while running web server....");
  }

  console.log(`Server is up and running on PORT ${PORT}....`);

});
