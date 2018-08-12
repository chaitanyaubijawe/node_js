'use strict';

const express = require("express");
const bodyParser = require("body-parser");
const app = express();




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


app.listen(8080, function (data) {

    console.log("Server has started :")

});
