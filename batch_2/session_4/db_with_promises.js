let mysql = require("mysql")

let dbConfig = {
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  database        : 'vatsalya',
  port: 3306
};


// console.log("Dir name :: Constant var provided by nodejs runtime :: " , __dirname);
let pool = mysql.createPool(dbConfig);

// console.log(pool);



let searchQuery = "al"

function getData(path, cb) {

  pool.getConnection(function(error, connection){

    if(error){

      console.log("Error while establishing conection ", error);
    }
    let query = 'SELECT * from soaps ';

    if(searchQuery){

      query =  query + " where name like '%" + searchQuery + "%'"
    }


    // console.log("QUERY ::", query);
    connection.query(query, function(err, results, fields){


      if(err){

        console.log("Error while inserting data ...", err);
      }

      else{
          console.log("results obtained after insert are :: ");

          if(path === "/dbData"){

            cb(results);
          }

          // return "data...";
      }

      // connection.end();
      connection.release();
      pool.end();

    });

  });

  console.log("this will print first....");


}

// Call using call back function.....
// getData("/dbData", function(data){
//
//
//   console.log("Hey i got data :: ", data);
//
// });


// console.log("Result of function getData :: ", result);




function getDataWithPromise() {



return new Promise(function(resolve, reject){




  pool.getConnection(function(error, connection){

    if(error){

      console.log("Error while establishing conection ", error);
    }
    let query = 'SELECT * from soaps ';

    if(searchQuery){

      query =  query + " where name like '%" + searchQuery + "%'"
    }


    // console.log("QUERY ::", query);
    connection.query(query, function(err, results, fields){


      if(err){

        console.log("Error while inserting data ...", err);
        reject(err);
      }

      else{
          console.log("results obtained after insert are :: ");



          resolve(results);


          // return "data...";
      }

      // connection.end();
      connection.release();
      pool.end();

    });

  });




})


}


// call using promise function....

let result = getDataWithPromise()


result.then(function(data){

  console.log("Hurrey :: data after promise succcess :: ", data);
}).catch(function (err) {

  console.log("Error unable to fetch data :: ", err);
});


// console.log("Result of function getData :: ", result);
