const express = require('express');
const app = express();
const PORT = 4200;

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

app.listen(PORT, function (err) {
  if (err){
    console.log("Error while running web server....");
  }

  console.log(`Server is up and running on PORT ${PORT}....`);

});
