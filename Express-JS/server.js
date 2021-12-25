var express = require('express');   //Import Express.js module
var app = express();

//Handle HTTP POST request using body-parser(middleware)
/*This body-parser module parses the JSON, buffer,
 string and url encoded data submitted using HTTP POST request.
*/
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false}));

//define routes here..
//GET Request
app.get('/', function (req, res) {
    //Send Response Content
    res.sendFile('index.html', { root: '.'});
});

//POST Request
app.post('/submit-student-data', function (req, res) {
    /*POST data can be accessed using req.body.
     The req.body is an object that includes properties for each submitted form. 
     Index.html contains firstName and lastName input types,
     so you can access it using req.body.firstName and req.body.lastName.*/
    var name = req.body.firstName + ' ' + req.body.lastName;

    res.send(name + 'Submitted Successfully!');
});

//PUT Request
app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

//DELETE Request
app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});


var server = app.listen(7900, function () {
    console.log('Node server is running..');
});