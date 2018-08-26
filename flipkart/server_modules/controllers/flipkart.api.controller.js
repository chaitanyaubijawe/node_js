const express = require('express');
const router = express.Router();
const productsRepository = require("../repositoryDB/products.repository").productsRepository;


class FlipkartApiController{


    constructor(){

        this.getProducts();
        this.addProducts();
        this.deleteProducts();
        this.updateProducts();
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

    addProducts(){

        router.post("/product", function (req, res) {

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


}


module.exports.flipkartApiController = new FlipkartApiController();