// Kisses Shannen Reyes
// WD 201
// server.js / express static

var express = require('Express');
var app = express();

app.use(express.static('public'))
app.get('/', function(req, res, next){
    res.send("You successfully created an app!");
});

var server = app.listen (2220, 'localhost', function () {
    var host = server.address().address; 
    var port = server.address().port;

    console.log("Server listening at http://%s:%s", host, port);
  });