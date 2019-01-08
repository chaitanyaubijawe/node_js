var students = [{id:2,name:"ABC"},
{id:3,name:"XYZ"},
{id:2,name:"ABC"},
{id:4,name:"PQR"},
{id:4,name:"PQR"} ]

var dupArr = [];
for(student of students){


  var studId = student['id'];
  var count = 0;
  for(studentInner of students){

    var studIdInner = studentInner['id'];


    if(studId == studIdInner)
    {

      count += 1;

    }
  }

  if(count > 1){
    var found = false;

    for(dStudent of dupArr){
      var dId = dStudent['id'];
      if(studId == dId)
      {

        found = true;
      }

    }
    // dupArr.push(student)

    if(!found){
      dupArr.push(student)
    }
  }
}

console.log(dupArr);
