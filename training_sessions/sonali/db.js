"use strict";

var selectQuery = "SELECT * FROM student WHERE id = 1";
var selectQuery = "SELECT * FROM student WHERE id = 2";
var selectQuery = "SELECT * FROM student WHERE id = 3";
var selectQuery = "SELECT * FROM student WHERE id = 4";
var selectQuery = "SELECT * FROM student WHERE id = 10";





// generateSelectQuery(numOfQuery); return array of [selectQuery];




function generateSelectQuery(numOfQuery){
  let queries = [];
  for(var i = 1; i<= numOfQuery ; i++)
  {

      let query = "SELECT * FROM student WHERE id = " + i
      queries.push(query);
  }

  return queries;
}

let queries = generateSelectQuery(10);

console.log(queries);

var insertQuery = "INSERT INTO student(id, name, lName, age, phNumber) VALUES (1,'Name-1', 'LName-1', '1', '1')"
var insertQuery = "INSERT INTO student(id, name, lName, age, phNumber) VALUES (2,'Name-2', 'LName-2', '2', '2')"
var insertQuery = "INSERT INTO student(id, name, lName, age, phNumber) VALUES (10,'Name-10', 'LName-10', '10', '10')"

// var studentInfo = {"id":"1", "name":"Name-1", "lName":"lName-1", "age":"1", "phNumber":"1"};
// generateInsertQuery(studentInfo);
// generateInsertQuery({"id":"2", "name":"Name-2", "lName":"lName-2", "age":"2", "phNumber":"2"}) return insertQuery;
var studentInfo = {"id":"1", "name":"Name-1"};
var updateQuery = "UPDATE student set name='Name-1'"

var studentInfo = {"id":"1", "name":"Name-1", "lName":"lName-1", "age":"1", "phNumber":"1"};
var updateQuery = "UPDATE student set name='Name-1', lName = 'lName-1', age=1, phNumber=1";
// generateUpdateQuery(studentInfo);

var studentInfo = {"id":"1", "name":"Name-1", "lName":"lName-1", "age":"1", "phNumber":"1"};


function generateInsertQuery(studentInfo) {

  let query = "INSERT INTO student( ";
  let columnClause = "";
  let valuesClause = "";
  for(let key in studentInfo){
    columnClause = columnClause + key + ", ";
    valuesClause = valuesClause + studentInfo[key] + ", ";
  }

  //console.log("keys: ", columnClause,"-- values caluese-- " ,valuesClause);

  query = query + columnClause  + ") VALUES ( "+ valuesClause + ")";
  console.log(query);
  return query;
}

   function generateUpdateQuery(studentInfo)
  {
    let query = "Update student set"
    let columnClause = " ";
     for(let key in studentInfo)
     {
       columnClause = columnClause  +  key + "='" + studentInfo[key] + "', ";
     }
     query = query + columnClause;
     console.log(query);
  }

  generateUpdateQuery(studentInfo);
