
// Express is a module. Provides you a way to implement HTTP server.
const express = require("express");
const request = require("request");

// create a express application object .
const app = express();
// import DB connection. so that DB intilizes at application start up
const DB = require("./server_modules/db/DBConnection").dBConnection;
// parses request body with desired format. currently we are using JSON.
const bodyParser = require("body-parser");
// import controllers
const flipkartApiController = require("./server_modules/controllers/flipkart.api.controller").flipkartApiController;
const PORT = 4200;
// config to read config from file and env.
const config = require("config");

const path = require("path");


class Server {

    constructor() {

        this.initializeRoutes();
        this.initializeDB();
        this.startServer();
    }


    initializeRoutes() {


        //enable proxy here...

      app.use(['/proxy/'],function(req,res) {


            let originUrl = req.url;
            let abc = req.url;
            console.log("Herer:  ", originUrl);
            let url = 'http://localhost:8080' + originUrl;


            req.pipe(

                request({'url':url},function(err, response, body){

            })

            ).pipe(res);

        }
      );


        // use body parser... currently parsing only JSON requests.
        app.use(bodyParser.json());


        app.use(function(req,res,next){

          console.log("URL called ", req.url);

          // get authorization header from req...
          // req.header.authorization..
          // check that auth is valid......
          //if valid then next()
          // else res.redirect(/login)

          next();

        });
        app.get("/health", function (req, res) {


            res.send("hey there!!");

        });
        // register your router here.
        app.use("/services", flipkartApiController.getRouter());

        app.use(express.static(path.join(__dirname, 'dist')));

        app.use("*", function (req, res) {


           // res.sendFile(__dirname + "/index.html");
            // res.sendFile(path.join( "/Users/chaitanya/CB/node_training/node_js/flipkart/index.html"));

            res.sendFile(path.join(__dirname, "dist/index.html"));
        });

        if(process.env.NODE_ENV !== 'prd'){

            app.use("/sdfsd", function (req, res) {

                res.send("using process env variable....")

            });

        }



        app.listen(PORT, function () {

            console.log("Server started on port : ", PORT)
        })
        console.log("__dirname and index using path....:: " , path.join(__dirname, "index.html"));
    }

    initializeDB(){
        // initialize databse connection pool at the application start up.
        let configDB = config.get("db");
        console.log("Confifguration for DB is :: ", configDB);
        DB.initializeDB(configDB);

    }

    startServer() {
        // listen to port. Start your server here.


    }


}

new Server();

// Other node modules to be studied.

// core
//1. Http: crawling...
//2. fs
// third party
//1. memcache
//2. https://www.npmjs.com/package/express-static-gzip
//3.
