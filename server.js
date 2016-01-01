var express = require('express');
var app = express();


var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



var websites = [{
    name: "site 1", pages: [
                        {
                            name: "Page 1, 1", widgets:
                              [
                                  { name: "Widget 1,1,1" },
                                  { name: "Widget 1,1,2" },
                                  { name: "Widget 1,1,3" }
                              ]
                        },
                        { name: "Page 1, 2", widgets: [] },
                        { name: "Page 1, 3", widgets: [] }
                    ]
                },
                {
                    name: "site 2", pages: [
                          { name: "Page 2, 1", widgets: [] },
                          { name: "Page 2, 2", widgets: [] },
                          { name: "Page 2, 3", widgets: [] }
                    ]
                },
                {
                    name: "site 3", pages: [
                          { name: "Page 3, 1", widgets: [] },
                          { name: "Page 3, 2", widgets: [] },
                          { name: "Page 3, 3", widgets: [] }
                    ]
                },
                { name: "site 4" , pages: [], widgets:[] }];



app.post("/api/website", function (req, res) {
    var obj = req.body;//{ firstName: "First", lastName: "Last" };
    websites.push(obj);
    res.json(websites);
});



app.put("/api/website/:id", function (req, res) {
    var index = req.params.id;
    var obj = req.body;//{ firstName: "First", lastName: "Last" };
    websites[index] = obj;

    res.json(websites);

});



app.delete("/api/website/:id", function (req, res) {
    var index = req.params.id;
    websites.splice(index, 1);
    res.json(websites);

});

app.delete("/api/website/:siteID/Page/:pageIndex", function (req, res) {
    var index = req.params.siteID;
    websites[index].pages.splice(req.params.pageIndex,1);
    res.json(websites);

});

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