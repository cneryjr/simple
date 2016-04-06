var fs = require('fs');
var bodyParser = require('body-parser');
https = require('https');
var express = require('express');

var port = process.env.PORT || 8080;
var app = express();
// var privateKey = fs.readFileSync('neryjr-key.pem');
// var certificate = fs.readFileSync('neryjr-cert.pem');
var privateKey = fs.readFileSync('ssl/neryjr.key');
var certificate = fs.readFileSync('ssl/neryjr.crt');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(__dirname + '/public'));

var server = https.createServer({
    key: privateKey,
    cert: certificate,
    ca: [fs.readFileSync('ssl/gd_bundle_01.crt', 'utf8'),
         fs.readFileSync('ssl/gd_bundle_02.crt', 'utf8')]
}, app).listen(port);
