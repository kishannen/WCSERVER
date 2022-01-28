// Kisses Shannen Reyes
// WD 201
// 2075 - WCServer

var http = require('http');

var server = http.createServer(function(req,res){
  
  if (req.url == '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write('<html><body><p>This is home Page. </p></body></html>');
    res.end();
  }

  else if (req.url == "/student"){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><p>This is Student Page. </p></body></html>');
    res.end();
  }
  
  else if (req.url == "/admin"){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><p>This is Admin Page. </p></body></html>');
    res.end();
  }

  else{
    res.end('Invalid Request');
  }

});

server.listen(3000);
console.log('NodeJS localhost at port 3000 is running...')