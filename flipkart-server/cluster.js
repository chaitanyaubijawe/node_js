// Express is a module. Provides you a way to implement HTTP server.
const express = require("express");
const cluster = require("cluster");
// create a express application object .
const app = express();
const PORT = 8080;




console.log("Cluster mode:: current Mode is :: ", cluster.isMaster);
if (cluster.isMaster) {

    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();

} else {
    function m1(duration) {

        let start = Date.now();

        while (Date.now() - start < duration) {

        }

    }


    app.get("/health/slow", function (req, res) {
        // business logic....
        // Db operations
        // - insert
        // - select
        m1(5000);
        res.send("hey there!!");

    });

    app.get("/health/fast", function (req, res) {

        res.send("hey there!! its too fast...");

    });


    app.listen(PORT, function () {

        console.log("Server started on port : ", PORT)
    });

}
