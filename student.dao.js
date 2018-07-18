/* Array of Object */
var obj = [];
obj=[{name: "UpdatedName1",age:20,phoneNumber:9999999999},{name: "UpdatedName2",age:25,phoneNumber:9999999998}];

/*Object*/
var singleobject = {name: "UpdatedName1",age:20,phoneNumber:9999999999};

/*
Function - Update student Query string 
In Param - Object and ID
Out - Update Query String
*/
function updateStudent(obj,id){
    var query = "UPDATE student set "
	for (key of Object.keys(obj)){
		query += key + "=" + obj[key] + ",";
	}
	query = query.substring(0, query.length -1);
	query += " where id = " + id +";";
	return query;
}

for (Index in obj ){
	var UpdatedStudent = updateStudent(obj[Index],Index);
	console.log(UpdatedStudent);
}

/*
Function - Update student Query string using IN 
In Param - Object and ID
Out - Update Query String
*/
function updateStudentIn(obj,ids){
    var updateInQuery = "UPDATE student set "

	for (var key of Object.keys(obj)){
		 updateInQuery += key + "=" + obj[key] + ",";
	}
	updateInQuery = updateInQuery.substring(0, updateInQuery.length -1);
	updateInQuery += " where id IN(";
	for (id of ids ){
		updateInQuery += id + ",";
	}
    updateInQuery = updateInQuery.substring(0, updateInQuery.length -1);
	updateInQuery += ");";
	return updateInQuery;
}

for (Index in obj ){
	var ids = [1,2,3];
	var UpdatedStudentIn = updateStudentIn(obj[Index],ids);
	console.log(UpdatedStudentIn);
}

/*
Function - Single Insert student Query string 
In Param - Object
Out - Single insert Query String
*/
function insertsinglestudent(singleobject){
	var InsertQueryName= "INSERT INTO student (" 
	for (var value of Object.keys(singleobject)){
	  InsertQueryName += value + ",";
	}
    InsertQueryName = InsertQueryName.substring(0, InsertQueryName.length -1);
    InsertQueryName += ") VALUES(" 
	for (var value of Object.keys(singleobject)){
	  InsertQueryName += singleobject[value] + ",";
	}
	InsertQueryName = InsertQueryName.substring(0, InsertQueryName.length -1);
    InsertQueryName +=");"
	return InsertQueryName;
}

var insertvalue = insertsinglestudent(singleobject);
console.log(insertvalue);

/*
Function - Multiple Insert student Query string 
In Param - Object
Out - multiple insert Query String
*/

function insertStudents(obj){	
	var InsertQueryName= "INSERT INTO student (" 
	for (var value of Object.keys(obj)){
	  InsertQueryName += value + ",";
	}
    InsertQueryName = InsertQueryName.substring(0, InsertQueryName.length -1);
    InsertQueryName += ") VALUES(" 
	for (var value of Object.keys(obj)){
	  InsertQueryName += obj[value] + ",";
	}
	InsertQueryName = InsertQueryName.substring(0, InsertQueryName.length -1);
    InsertQueryName +=");"
	return InsertQueryName;
}
for (Index in obj){
    var insertvalues = insertStudents(obj[Index]);
    console.log(insertvalues);
}

/*
Function - generateString 
In Param - Object
Out - generate name value string from object 
*/
function generateString(obj){
	var keyValueString = "";
    for (value of Object.keys(obj)){
		keyValueString += "\"" + value + "=" + obj[value] + "\"" + ","; 
    }
	keyValueString = keyValueString.substring(0, keyValueString.length -1);
	return keyValueString;
}

var generatedKeyValueString= generateString(singleobject);
console.log(generatedKeyValueString);

/*
Function - generateCommaSeperatedString 
In Param - Object
Out - generate key string from object 
*/

function generateCommaSeperatedString(obj){
    var keyStrings = "";
    for (value of Object.keys(obj)){
		keyStrings += "\"" + value + "\"" + ","; 
    }
	keyStrings = keyStrings.substring(0, keyStrings.length -1);
	return keyStrings;
}

var generatedKeyStrings= generateCommaSeperatedString(singleobject);
console.log(generatedKeyStrings);


/*
Function - selectQuery 
In Param - Object
Out - select query string 
*/

function selectQuery(obj){
    var selectQueryName= "SELECT * from student where ";
	for (value of Object.keys(obj)){
		if (typeof obj[value] == 'string'){
		    selectQueryName += value + "=" + "\""+ obj[value] + "\"" + " AND "; 
		}
		else {
			selectQueryName += value + "=" +  obj[value] + " AND "; 
		}
    }
    selectQueryName = selectQueryName.substring(0, selectQueryName.length -5) +";";
	return selectQueryName;
}

var generatedSelectQueryName= selectQuery(singleobject);
console.log(generatedSelectQueryName);



//var generatedSelectQueryName = "5";

/*if (typeof generatedSelectQueryName == 'string'){
	console.log("condition satisfied");
}
else {
		console.log("condition failed");
}
*/



/* if {name : "updatedName"}
{name:"updatedName", age :20}

generateString
Return 
"name = updatedName"

Return 
"name = updatedName",age=20"
*/

/*
generatecommaseperatedstring
retun "name"
return "name,age"
*/

/* SELECT * from student where dynamic */