//content


var generateAge=function()
{
	//for(var i=1;i<10;i++)
	//{
		var age = Math.floor((Math.random() * 50) + 25);
		//console.log(age);
		return age;
		
	//}
	
}
var generatePhoneNumber=function()
{
	var phoneNumber=Math.floor(Math.random() * 10000000000);
	//console.log(phoneNumber);
	return phoneNumber;
}

var insertRandom=function(numberToInsert)
{	
	var query="Insert INTO student(id,name,age,phNumber) values(";
	for(var i=1;i<numberToInsert;i++)
	{
		var finalQuery=query+i+","+"Name_"+i+","+generateAge()+","+generatePhoneNumber()+")";
		console.log(finalQuery);
	}

}

insertRandom(10);

var insertStudent=function(studentObj)
{
	
	
		// var query = "INSERT INTO student ( id, name, age, phNumber) VALUES (1,'xxx', 23, '123234123');"
		var query = "INSERT INTO student ( ";


		for(key in studentObj)
		{
			//key = id// name // age// phNumber
			
			query  +=  key + ","

		}
		
		// key = id
		// query = "INSERT INTO student ( id,"
		// key = name
		// query = "INSERT INTO student ( id,name"
		// key = age
		// query = "INSERT INTO student ( id,name,age"
		// key = phNumber
		// query = "INSERT INTO student ( id,name,age, phNumber,"
		
		// google to remove last index of string in javascript..
		
		// query = "INSERT INTO student ( id,name,age, phNumber"
		
		query += ") VALUES ( "
		// query = "INSERT INTO student ( id,name,age, phNumber) VALUES (";
		
		for(key in studentObj)
		{
			//key = id// name // age// phNumber
			
			query  +=   "'" + studentObj[key] + "',"

		}
		// key = id
		// query = "INSERT INTO student ( id,name,age, phNumber) VALUES ('1',";
		// key = name
		// query = "INSERT INTO student ( id,name,age, phNumber) VALUES ('1','xxxx'";
		// key = age
		// query = "INSERT INTO student ( id,name,age, phNumber) VALUES ('1','xxxx', '20'";
		// key = phNumber
		// query = "INSERT INTO student ( id,name,age, phNumber) VALUES ('1','xxxx', '20', '1232342', ";
		
		// google to remove last index of string in javascript..
		
		query += ");"
		
		return query;
}


var query = insertStudent({id:1, name:"xxx", age:20, phNumber:'12232323'})

console.log(query)
