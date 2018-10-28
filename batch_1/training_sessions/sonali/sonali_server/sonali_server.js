const express = require("express");
const app = express();


app.get("/info", function(req,res){

    res.send({"key":"value"});
});

app.listen(8080, function(err){


    console.log("Server has started....");
})

app.get("/info1",function(req,res){
    
    res.send({"key1":"value1"}); 
});

