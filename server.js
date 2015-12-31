var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



var websites = [{ name: "site 1" }, { name: "site 2" }, { name: "site 3" }, { name: "site 4" }];

app.get("/api/website", function (req, res) {
    res.json(websites);
});

app.get("/api/website/:id", function (req, res) {
    res.json(websites[req.params.id]);
});

app.use(express.static(__dirname + '/public'));

var ip = process.env.OPENSHIFT_NODEJS_IP||'127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.listen(port,ip);