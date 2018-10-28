const express = require('express');
const router = express.Router();
const productsRepository = require("../repositoryDB/products.repository").productsRepository;
const { check, validationResult } = require('express-validator/check');
const dBConnectionMongoStd = require("../db/DBConnectionMongoStd").dBConnectionMongoStd;

class FlipkartApiController{


    constructor(){

        this.getProducts();
        this.addProducts();
        this.deleteProducts();
        this.updateProducts();
        this.addProductInMongo();
        this.getProductsInMongo();
        this.getProductsWithPromise();
        this.getProductById();
    }


    getProducts(){

        router.get("/products", function (req, res) {

            // we need a query parameter "searchQuery"
            // read it as req.query.searchQuery
            let searchQuery = req.query.searchQuery;

            productsRepository.getProducts(searchQuery, function (results) {

                // query paramter is present in request object.
                res.send(results);

            });



        })

    }
  getProductById(){

    router.get("/product/:id", function (req, res) {

      // we need a query parameter "searchQuery"
      // read it as req.query.searchQuery
      let pId = req.params.id;

      productsRepository.getProductById(pId, function (results) {

        // query paramter is present in request object.
        res.send(results);

      });


    })

  }


    getProductsWithPromise(){

        router.get("/promise/products", function (req, res) {

            // we need a query parameter "searchQuery"
            // read it as req.query.searchQuery
            let searchQuery = req.query.searchQuery;

            productsRepository.getProductsWithPromise(searchQuery).then(function (results) {

                // query paramter is present in request object.
                res.send(results);

            }).catch(function (error) {

                res.status(500).send(error);

            });



        })

    }

    addProducts(){

        router.post("/product",  [
            check('name').isLength({ min: 5 })
        ]
            ,  function (req, res) {



            /*
            * function (req, res, next) {

            let name =  req.body.name;

            if(name.length > 10){

                res.status(400).send({"error":"Only 10 characters are allowed in request."})
                return;
            }else{

                next();
            }


        }
            * */
            // request object???

            // /// validate request ?
            // let name =  req.body.name;
            //
            // if(name.length > 10){
            //
            //     res.status(400).send({"error":"Only 10 characters are allowed in request."})
            //     return;
            // }


                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
                }

            productsRepository.addProduct(req.body, function (results) {

                // query paramter is present in request object.
                res.send(results);

            });

        })

    }

    deleteProducts(){

        router.delete("/product/:id", function (req, res) {

            // :id is URL path parameter.
            // Present in request object. access it as : req.params.id

            productsRepository.deleteProduct(req.params.id, function (results) {

                // query paramter is present in request object.
                res.send(results);

            });
        })

    }

    updateProducts(){

        router.put("/product/:id", function (req, res) {

            res.send("update products");

        })

    }

    getRouter(){

        return router;
    }


    addProductInMongo(){


        router.post("/mongo/product",

            function (req, res) {

                dBConnectionMongoStd.executeQuery(function (client) {

                    let db = client.db("cnb");

                    // insert a record in collection named product.

                    let collection = db.collection("product");

                    collection.insertMany([
                        req.body
                    ], function(err, result) {

                        if(err){
                            res.status(500).send({"Error":"db error..." });
                        }

                        console.log("Inserted  documents into the collection", result);
                        //callback(result);

                        res.send(result);
                    });

                    client.close();

                });

            });

    }


    getProductsInMongo(){


        router.get("/mongo/products",

            function (req, res) {

                dBConnectionMongoStd.executeQuery(function (client) {

                    let db = client.db("cnb");

                    // insert a record in collection named product.

                    let collection = db.collection("product");
                    let searchQuery = req.query.searchQuery;
                    let criteria = {};

                    if(searchQuery){

                        criteria["name"] = searchQuery;
                    }

                    collection.find(criteria).toArray( function(err, result) {

                        if(err){
                            res.status(500).send({"Error":"db error..." });
                        }

                        console.log("Found  documents into the collection", result);
                        //callback(result);

                        res.send(result);
                    });

                    client.close();

                });

            });

    }

}


module.exports.flipkartApiController = new FlipkartApiController();
