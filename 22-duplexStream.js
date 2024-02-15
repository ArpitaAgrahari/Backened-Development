//write a program for duplex stream in node js
/*
var fs = require("fs");
var writer = fs.createWriteStream('text');
var reader = fs.createReadStream('text');
writer.write("Simple Learning");
writer.pipe(reader);
reader.on('data',function(data){
    console.log("Data: "+data.toString());
});
console.log("Program Ended");
//Output:
//Program Ended
//Data: Simple Learning

*/


//compression of data using duplex stream
var zlib = require('zlib');
var fs = require('fs');
var gzip = zlib.createGzip();
var reader = fs.createReadStream('text');
var writer = fs.createWriteStream('text.gz');
reader.pipe(gzip).pipe(writer);
console.log("File Compressed.");


//concat buffer using duplex stream
var buffer1 = new Buffer("Simple ");
var buffer2 = new Buffer("Learning");
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("Buffer3 content: "+buffer3.toString());


//compare buffer using duplex stream
var buffer1 = new Buffer("Simple ");
var buffer2 = new Buffer("Learning");
var result = buffer1.compare(buffer2);
if(result<0){
    console.log(buffer1+" comes before "+buffer2);
}
else if(result==0){
    console.log(buffer1+" is same as "+buffer2);
}
else{
    console.log(buffer1+" comes after "+buffer2);
}
//Output: Simple  comes before Learning


//copy buffer using duplex stream
var buffer1 = new Buffer("Simple Learning");
var buffer2 = new Buffer(10);
buffer1.copy(buffer2);
console.log("Buffer2 content: "+buffer2.toString());
//Output: Buffer2 content: Simple Lea
