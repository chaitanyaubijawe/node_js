const http = require('http');
const url = require('url');
const express = require('express');
// npm init
// npm install express
// npm install express --save () save your dependency to package.json.
// npm install --- this will install dependecies from package.json.


let server = http.createServer( function (req, res) {
  // IncomingMessage :: req

  let reqUrl = url.parse(req.url);
  console.log("always been called whenever there is a request......", reqUrl.path);
  res.write("hello... "+ reqUrl.path);

  if(reqUrl.path === '/info'){

    //m1()
  }else{

  }
  res.end();

})

server.listen(8080, function(){

  console.log("listening on 8080.....");
})
