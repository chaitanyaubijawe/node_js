const express = require("express");
const app = express();
const PORT = 8080;

// server modules import

const internalApiController = require('./server_modules/controllers/internal.api.controller').internalAPIController;

class Server{

    constructor(){

        console.log("this is server");

        this.initializeRoutes();
        this.startServer();
    }

    initializeRoutes(){

        let router = express.Router();

        router.get("/info",  (req,res) => {
            res.write("hi there!! this is an express GET API....");
            res.end();
        });

        router.post("/info", function (req,res) {
            res.write("hi there!! this is an express POST API....");
            res.end();
        });

        router.put("/info", function (req,res) {
            res.write("hi there!! this is an express PUT API....");
            res.end();
        });



        let router_another = express.Router();

        router_another.get("/info", function (req,res) {
            res.write("hi there!! this is an express GET API....");
            res.end();
        });



        app.use("/data", router);
        app.use("/another", router_another);
        app.use("/services", internalApiController.getRouter());
        // app.use("/services", internalApiController.getRouter());
        // app.use("/services", internalApiController.getRouter());
        // app.use("/services", internalApiController.getRouter());
        // app.use("/services", internalApiController.getRouter());
        // app.use("/services", internalApiController.getRouter());
        // app.use("/services", internalApiController.getRouter());
        // app.use("/services", internalApiController.getRouter());
        // app.use("/services", internalApiController.getRouter());

        
    }

    startServer(){


        app.listen(PORT, function () {
            console.log("Server has started on PORT: ", PORT);
        });
    }

}


let server = new Server();

//server.startServer();


//internalApiController.getRouter();

//console.log("here....");

// code building automation?
// node internals
// promise
