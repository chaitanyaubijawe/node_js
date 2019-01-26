let mysql = require("mysql")

let dbConfig = {
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  database        : 'vatsalya',
  port: 3306
};


console.log("Dir name :: Constant var provided by nodejs runtime :: " , __dirname);
let pool = mysql.createPool(dbConfig);

console.log(pool);



let searchQuery = "al"


pool.getConnection(function(error, connection){

  if(error){

    console.log("Error while establishing conection ", error);
  }
  let query = 'SELECT * from soaps ';

  if(searchQuery){

    query =  query + " where name like '%" + searchQuery + "%'"
  }


  console.log("QUERY ::", query);
  connection.query(query, function(err, results, fields){


    if(err){

      console.log("Error while inserting data ...", err);
    }

    else{
        console.log("results obtained after insert are :: ", results);
    }

    connection.release();

  });

});
