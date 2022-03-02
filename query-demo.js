// Kisses Shannen Reyes
// WD 201
// query-demo.js

var express = require('express');
var app = express();

app.get('/', (req, res) => {
    console.log(req.query)
})

app.listen(3800);

var server = app.listen (2122, 'localhost', function () {
    var host = server.address().address; 
    var port = server.address().port;

    console.log("Server listening at http://%s:%s", host, port);
  });
  