var express = require("express");
var app = express(),
    fs = require("fs"),
    parser = require("./params_parser.js");
render = require("./render_view");
var p = parser.parseParams;
var r = render.render;

app.get("/", function (req, res) {
    if (req.url.indexOf("favicon.ico") > 0) {
        return;
    }
    fs.readFile("./index.html", function (err, html) {
        if (!err) {

            var paramArray = [],
                parameters = {};

            var parameters = p(req);
            var htmlRes = r(html, parameters);
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.write(htmlRes);
        } else {
            res.writeHead(500, {
                "Content-Type": "text/html"
            });
            res.write("!Error" + err);
        }
        res.end();
    });
});
var port=(process.env.PORT || 8080);
app.listen(port,function(){
    console.log(`app is running in ${port} port`);
});