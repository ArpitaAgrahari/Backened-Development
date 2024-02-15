var http=require("http"); //require is amodule that requires to work with web server.

http.createServer(function(req, res){
const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('There was an error reading the file!', err);
        return;
    }
    console.log(data);
});
}).listen(8080);