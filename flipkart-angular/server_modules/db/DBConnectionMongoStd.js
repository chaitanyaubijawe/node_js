const mongoClient = require("mongodb").MongoClient;

class DBConnectionMongoStd{

    constructor(){

    }

    executeQuery(cb){

        let url = "mongodb://localhost:27017";

        mongoClient.connect(url , function (err, client) {

            if(err){
                throw err;
            }

            console.log("Connection successful .... ", client);

            // use db::
            cb(client);


        })


    }
}


module.exports.dBConnectionMongoStd = new DBConnectionMongoStd();
