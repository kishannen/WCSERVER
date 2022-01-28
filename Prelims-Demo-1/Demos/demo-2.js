// Kisses Shannen Reyes
// WD 201
// 2075 - WCServer

var http = require('http');

var server = http.createServer(function(req,res){
  
  //any or path code here

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();

});

server.listen(2290);