var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('public'))
app.get('/index.html', function(req, res){
    res.sendFile(__dirname + "/" + "index.html");
})

app.post('/process_post', urlencodedParser, function(req, res){
    response = {
        fname: req.body.fname,
        lname: req.body.lname,
        course: req.body.course,
        age: req.body.age,
        comments: req.body.comments
    };
    console.log(response);
    res.end(JSON.stringify(response))
})

var server = app.listen (2911, function () {
    var host = server.address().address; 
    var port = server.address().port;

    console.log("Server listening at http://%s:%s", host, port);
  })