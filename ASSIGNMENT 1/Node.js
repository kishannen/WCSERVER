var http = require('http');
var root = require('./root.js');
var cont = require('./contact.js');
var about = require('./about.js');
var server = http.createServer(function(req,res){
  if (req.url == '/'){

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><h1>WELCOME TO MY NODE JS APPLICATION</h1></body></html>');
    res.write(root('John Smith'));
    res.end();
  
  }

  else if (req.url == '/about'){

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><h1>THIS IS THE ABOUT PAGE</h1></body></html>');
    res.write(about('John Smith'));
    res.end();
  }

  else if (req.url == '/gallery'){

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><h1>THIS IS THE GALLERY</h1></body></html>');
    res.end();
  }

  else if (req.url == '/contact'){

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><h1>THIS IS THE CONTACT PAGE</h1></body></html>');
    res.write(cont('John Smith'));
    res.end();
  }

  else{
    res.end('<html><body><h1><strong>INVALID REQUEST!</strong></h1></body></html>');
  }
  
});

server.listen(3500);
console.log('Node JS is currently running at port 3500...');


/*
 * Reyes, Kisses Shannen O.
 * WD 201
 * February 2, 2022
 * Lab Activity 1
 */