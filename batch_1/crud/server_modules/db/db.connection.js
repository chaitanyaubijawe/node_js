const mysql = require('mysql');
/*
How to create db:

create database cnb;


*/
class DbConnection
{

    constructor(){


    }

    executeQuery(cb){
        // STEP -1
        let config = {
            host     : 'localhost',
            user     : 'root',
            database : 'cnb'
        };

        // STEP-2 :: CREATE YOUR CONNECTION
        var connection = mysql.createConnection(config);

        // ESTABLISH A CONNECTION
        connection.connect();

        // EXECUTE QUERIES..
        let query = "SELECT * from product ";
        
        // /let query = "INSERT";


        connection.query(query, function (err, results) {

            if (err){

                throw err;
            }


            console.log(results);

            cb(results);

        });



        connection.end();



    }




}

module.exports.dbConnection = new DbConnection();

/*
let db = new DbConnection();

var fetchResults = function (results) {


        for(let row of results){

            console.log("-- id -- ", row.id, "-- name -- ", row.name, "-- price -- ", row.price);

        }
};


let results = db.executeQuery(fetchResults);

console.log("Results nahi aye? ");

*/