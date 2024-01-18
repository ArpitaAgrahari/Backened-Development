var http = require('http');
var dp = require(./04-LOOP);

http.createServer(fucntion(req,res){
    res.writeHead(200,{'Content-Type:''text/html'});
    res.write("the date and time is currently: "+dp.myDateTime());
    res.end();
}).listen(8080);