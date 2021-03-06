const DB = require("../db/DBConnection").dBConnection;

class ProductsRepository{


    constructor(){


    }


    getProducts(searchQuery, cb){

        let query = "SELECT * from  product ";

        if(searchQuery){

            query += " where name like '%"+searchQuery+"%'";
        }

        try{

            DB.getDBPool().getConnection(function (err, con) {

                if (err){

                    throw err;
                }
                try{

                    con.query(query, function (err, results) {

                        if (err){

                            throw err;
                        }


                        console.log(results);

                        con.release();

                        cb(results);

                    });

                }
                catch (error){

                    console.error("Error !! ", error);
                }


            })
        }

        catch (error){

            console.error("Error !! ", error);

        }

    }


    addProduct(product, cb){


        let query = "INSERT INTO product (id, name, price) VALUES ('";



        query += product.id + "', '" + product.name + "','" + product.price +"')";


        try{

            DB.getDBPool().getConnection(function (err, con) {

                if (err){

                    throw err;
                }
                try{

                    con.query(query, function (err, results) {

                        if (err){

                            throw err;
                        }


                        console.log(results);

                        con.release();

                        cb(product);

                    });

                }
                catch (error){

                    console.error("Error !! ", error);
                }


            })
        }

        catch (error){

            console.error("Error !! ", error);

        }

    }
    updateProduct(product){

    }
    deleteProduct(id, cb){


        let query = "DELETE from product WHERE id='" + id + "'";



        try{

            DB.getDBPool().getConnection(function (err, con) {

                if (err){

                    throw err;
                }
                try{

                    con.query(query, function (err, results) {

                        if (err){

                            throw err;
                        }


                        console.log(results);

                        con.release();

                        cb("success");

                    });

                }
                catch (error){

                    console.error("Error !! ", error);
                }


            })
        }

        catch (error){

            console.error("Error !! ", error);

        }

    }



    getProductsWithPromise(searchQuery){

        return new Promise(function (resolve, reject) {

            let query = "ELECT * from  product ";

            if(searchQuery){

                query += " where name like '%"+searchQuery+"%'";
            }

            try{

                DB.getDBPool().getConnection(function (err, con) {

                    try{
                        if (err){

                            return reject(err);
                            }


                        con.query(query, function (err, results) {

                            if (err){

                                //throw err;
                                return reject(err);

                                console.log("still continuing beta....");

                            }else{

                                console.log(results);

                                con.release();

                                return resolve(results);

                            }




                        });

                    }
                    catch (error){

                        console.error("Error !! ", error);
                        return reject(error);
                    }


                })
            }

            catch (error){

                console.error("Error !! ", error);
                reject(error);

            }


        })
    }


}

module.exports.productsRepository = new ProductsRepository();