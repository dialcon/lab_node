var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    
    fs.readFile("./index.html", function (err, resp) {
        res.write(resp);
        res.end();
    });
}).listen(8080);