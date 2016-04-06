var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(__dirname + '/public'));

app.get('/sso_dbconnection_popup/dsa7d77dsa7d7', function(req, res) {
   console.log("GET");
   console.log("body: ", req.body);
   console.log("params: ", req.params);
   console.log("query: ", req.query);
    res.send({user: "nery", token: "asdfg7"});
});

app.get('/redirect', function(req, res) {
    res.send("redirect.html");
});

app.get('/login', function(req, res) {
   console.log("GET");
   console.log("body: ", req.body);
   console.log("params: ", req.params);
   console.log("query: ", req.query);
    res.send(req.body);
});

app.post('/login', function(req, res) {
   console.log("POST");
   console.log("body: ", req.body);
    res.send(req.body);
});

app.listen(process.env.PORT || 8080/*, 'APP_PRIVATE_IP_ADDRESS'*/);
// console.log('Server running at http://APP_PRIVATE_IP_ADDRESS:8080/');
