'use strict';

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require('./server_modules/db/db.connection').dbConnection;




app.use(bodyParser.json());
app.get("/info", function (req, res) {


    res.write("hi there!! this is an express GET API....");
    res.end();

});

// app.use(
//
//     function (req,res,next) {
//
//         //next();
//
//         console.log("here.......");
//         var data = "";
//
//         req.on('data', function (chunk) {
//
//             data += chunk;
//
//         });
//
//         req.on('end', function () {
//
//
//             req.body = data;
//             next();
//
//
//         });
//
//         //next();
//
//     }
//
// );

app.post("/info", function (req, res) {


    //res.write("POST::: ");

    // let response = {"here":"is object"};
    let response = req.body;
    res.status(200).send(response);
    //res.end();

});



app.put("/info", function (req, res) {


    //res.write("POST::: ");

    // let response = {"here":"is object"};
    let response = req.body.userName + " :: PUT request";
    res.status(200).send(response);
    //res.end();

});

app.get("/sonali/fetchstudent", function (req, res) {

  db.executeQuery(function (results) {


      let response = results;

      // do db related mapping thing...

      for(let row of results){

          console.log("-- id -- ", row.id, "-- name -- ", row.name, "-- price -- ", row.price);

      }


      res.send(response);
  });

});


app.listen(8080, function (data) {

    console.log("Server has started :")

});
