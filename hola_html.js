var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    
    fs.readFile("./index.html", function (err, resp) {
        if (!err){
         res.writeHead(200,{"Content-Type":"text/html"});
         res.write(resp);
        }else{
            res.writeHead(500,{"Content-Type":"text/html"});
            res.write("!Error"+err);
        }
         res.end();
    });
}).listen(8080);