var insertStudent = function (objToInsert = new Object()) {


	var query = "INSERT INTO student  (" + generateCommaSeparatedString(objToInsert) + ") VALUES ( ";

	for(var columnName in objToInsert){

		query +=  " '"+ objToInsert[columnName] + "'," 
	}

	query = query.slice(0,-1) + ");";


	return query;
}

var generateCommaSeparatedString = function(obj){
		var string = ""
		for(key in obj){
			string += key + ","
		}
		return string.slice(0, -1);
}

console.log(insertStudent({id:1, name:"name", age:20}));


var insertMultipleStudent = function (count) {

	for(var num = 0; num<= count ; num++)
	{

		console.log(insertStudent({id:num, name:"name_" + num, age:num}));
	}
	// body...
}

insertMultipleStudent(10);
var updateStudent = function (objToUpdate = new Object(), id) {


	var query = "UPDATE student set ";

	for(var columnName in objToUpdate){


		query +=  " " + columnName + " = '" + objToUpdate[columnName] + "',"

	}

	query = query.slice(0,-1);

	query += " WHERE id = " + id + ";";


	return query;
}


console.log(updateStudent({name:"updated_name"}, 1));
console.log(updateStudent({name:"updated_name_2", age:13}, 2));



var updateMultipleStudent = function (objToUpdate = new Object(), ids) {


	var query = "UPDATE student set ";

	for(var columnName in objToUpdate){


		query +=  " " + columnName + " = '" + objToUpdate[columnName] + "',"

	}

	query = query.slice(0,-1);
	query += " WHERE id in (" ;
	
	for(var id of ids){

		query +=   id + "," ; 
	}

	query = query.slice(0,-1) + "); " ;	


	return query;
}


console.log(updateMultipleStudent({name:"updated_name"}, [1]));
console.log(updateMultipleStudent({name:"updated_name_2", age:13}, [1,2]));


var selectStudent = function (criteria = new Object()) {


	var query = "SELECT * FROM student WHERE ";

	for(var columnName in criteria){

		query +=  " " + columnName + " = '" + criteria[columnName] + "' and"
	}

	query = query.slice(0,-3) + ";";

	return query;
}

console.log(selectStudent({name:"updated_name"}));
console.log(selectStudent({name:"updated_name", age:1}));
