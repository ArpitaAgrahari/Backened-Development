var fs = require("fs");
var buf = new Buffer(20000);
console.log("going to open file");
fs.open('input.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("File opened Successfully.")
    console.log("Going to read the file");
    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err){
            console.log(err);
        }
        console.log(bytes +"bytes read");
        if(bytes>0){
            console.log(buf.slice(0,bytes).toString());
        }
    });
});