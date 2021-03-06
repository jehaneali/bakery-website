const http = require('http');
var express = require("express");
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  fs.readFile("homePage/homePage.html", function(error, data) {
    if(error) {
      res.writeHead(404);
      res.write('Error: File Not Found');
    }
    else {
        // console.log(typeof data);
        console.log(data.toString());
        // res.writeHead(200)
        res.write(data);
    }    
    res.end();
  })
  // res.write(__dirname+"/helloWorld.html");
  // // res.setHeader('Content-Type', 'text/plain');
  // res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});