var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    
    fs.readFile("./index.html", function (err, resp) {
        if (!err){
         var html_string=resp.toString();
         var variables = html_string.match(/[^\{\}]+(?=\})/g);
         var nombre ="Dataff";
         for (var index = variables.length-1; index >= 0; index--) {
            var value = eval(variables[index]);
            html_string =html_string.replace("{"+variables[index]+"}",value); 
         };
         res.writeHead(200,{"Content-Type":"text/html"});
         res.write(html_string);
        }else{
            res.writeHead(500,{"Content-Type":"text/html"});
            res.write("!Error"+err);
        }
         res.end();
    });
}).listen(8080);