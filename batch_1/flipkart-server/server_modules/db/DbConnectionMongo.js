const mongoClient = require("mongodb").MongoClient;

class DBConnectionMongo{

    constructor(){

    }

    getConnection(){

        let url = "mongodb://localhost:27017";

        mongoClient.connect(url , function (err, client) {


            if(err){
                throw err;
            }

            console.log("Connection successful .... ", client);

            // use db::
            let db = client.db("cnb");

            // insert a record in collection named product.

            let collection = db.collection("product");

            collection.insertMany([
                {"name" : "Iphone 4", "price":50}, {"name" : "Iphone 5", "price":500}
            ], function(err, result) {

                console.log("Inserted 2 documents into the collection", result);
                //callback(result);
            });

            client.close();


        })


    }
}


new DBConnectionMongo().getConnection();