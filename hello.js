var http = require ("http");

var controlador = function(request,response){
    console.log("Recibimos una nueva petición");
    response.end("Hola Mundo Cruel");
};

var server = http.createServer(controlador);

server.listen(8928);