
// Express is a module. Provides you a way to implement HTTP server.
const express = require("express");
// create a express application object .
const app = express();
// import DB connection. so that DB intilizes at application start up
const DB = require("./server_modules/db/DBConnection").dBConnection;
// parses request body with desired format. currently we are using JSON.
const bodyParser = require("body-parser");
// import controllers
const flipkartApiController = require("./server_modules/controllers/flipkart.api.controller").flipkartApiController;
const PORT = 8080;


class Server {

    constructor() {

        this.initializeRoutes();
        this.initializeDB();
        this.startServer();
    }


    initializeRoutes() {

        // use body parser... currently parsing only JSON requests.
        app.use(bodyParser.json());

        app.get("/health", function (req, res) {


            res.send("hey there!!");

        });
        // register your router here.
        app.use("/services", flipkartApiController.getRouter());




    }

    initializeDB(){
        // initialize databse connection pool at the application start up.
        DB.initializeDB();

    }

    startServer() {
        // listen to port. Start your server here.
        app.listen(PORT, function () {

            console.log("Server started on port : ", PORT)
        })

    }


}

new Server();