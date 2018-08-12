const express = require('express');
const db = require('../db/db.connection').dbConnection;
const router = express.Router();

class InternalAPIController{


    constructor(){

        this.getInternalData();
        this.getExternalData();
    }

    getInternalData(){

        router.get("/products", function (req,res) {

            db.executeQuery(function (results) {


                let response = results;

                // do db related mapping thing...

                for(let row of results){

                    console.log("-- id -- ", row.id, "-- name -- ", row.name, "-- price -- ", row.price);

                }


                res.send(response);
            });

            //res.write("hi there!! this is an express GET internal API....");
            //res.end();


        });


    }


    getExternalData(){

        router.get("/info/external", function (req,res) {
            res.write("hi there!! this is an express GET external API....");
            res.end();
        });


    }

    getRouter(){

        return router;
    }

}


module.exports.internalAPIController = new InternalAPIController();