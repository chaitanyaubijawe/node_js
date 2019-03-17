// Step -1
let express = require("express");

let mysql = require("mysql");

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


// body parser:: step-1
let parser = require("body-parser");
// body parser:: step-2
let bodyParser = parser();

console.log(express);
// Step -2
let app = express();
// body parser:: step-3
app.use(bodyParser);

// Step -3- Start
// call from browser
// http://localhost:8080/m1
app.get('/soaps', function m1(req, res){

  // this is path param.
  // this is query param.
  let searchQuery = req.query.searchQuery;
  // call this API as
  // URL: /m1/:id?searchQuery=12323

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
      res.send(results);
    });

  });

  // swagger.....
  console.log("This piece of code is called via browser.....",  searchQuery);
  //res.send({"hi":"there"});
});

app.get('/soap/:id', function m1(req, res){

  // this is path param.
  let id = req.params.id;
  // this is query param.
  // call this API as
  // URL: /m1/:id?searchQuery=12323

  pool.getConnection(function(error, connection){

    if(error){

      console.log("Error while establishing conection ", error);
    }
    let query = 'SELECT * from soaps where id=' + id;


    console.log("QUERY ::", query);
    connection.query(query, function(err, results, fields){


      if(err){

        console.log("Error while inserting data ...", err);
      }

      else{
          console.log("results obtained after insert are :: ", results);
      }

      connection.release();
      res.send(results);
    });

  });


  // swagger.....
  console.log("This piece of code is called via browser.....", id);

});


app.delete('/soap/:id', function m1(req, res){

  // this is path param.
  let id = req.params.id;
  // this is query param.
  let seachQuery = req.query.seachQuery;


  // call this API as
  // URL: /m1/:id?searchQuery=12323
  // swagger.....
  console.log("This piece of code is called via browser.....", id,  seachQuery);
  res.send({"deleted":"sdfsd"})
});


// call from postman
// request type post
app.post('/soap', function m1(req, res){

  let reqBody = req.body;

  console.log("POST:: This piece of code is called via browser.....", reqBody);


  pool.getConnection(function(error, connection){

    if(error){

      console.log("Error while establishing conection ", error);
    }
    let valuesClause = "( '"+ reqBody.name +"', '"+ reqBody.description +"', '"+ reqBody.price +"','"+ reqBody.url+"')";

    console.log("Values clause:: ", valuesClause);
    let query = 'INSERT INTO soaps(`name`, `description`, `price`, `url`) values (?,?,?,?)';


    console.log("QUERY ::", query);
    connection.query(query, [reqBody.name, reqBody.description, reqBody.price, reqBody.url], function(err, results, fields){


      if(err){

        console.log("Error while inserting data ...", err);
      }

      else{
          console.log("results obtained after insert are :: ", results);
      }

      connection.release();
      //
      reqBody["id"] = results.insertId;
      res.send(reqBody);
    });

  });



});

app.put('/soap/:id', function m1(req, res){
  let id = req.params.id;
  // this is query param.
  let seachQuery = req.query.seachQuery;

  let reqBody = req.body;

  console.log("POST:: This piece of code is called via browser.....", reqBody);
  res.send({"hi":"there :  This is post..."});
});

// Step: 5 : send HTML to end user..




app.get("/angular-1",function (req, res) {


  res.sendFile(__dirname +"/angular_1.html");

} )

app.use(express.static(__dirname +'/dist'));

app.get("*",function (req, res) {


  res.sendFile(__dirname +"/dist/index.html");

} )
// Step -3- Ends

// Step -4
app.listen(8080, function (err) {

  console.log("server started::::: 8080" )

});
