var http=require("http"); //require is amodule that requires to work with web server.

http.createServer(function(req, res){
    res.writeHead(200,{'Content.Type':'text/plain'});     //200 is status check for http for satisfaction taht it is okay to enter tot web
    res.end('Hello World');

}).listen(8080);