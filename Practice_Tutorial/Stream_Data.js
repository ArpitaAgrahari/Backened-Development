const fs = require('fs'); 
const readStream = fs.createReadStream('E:\\Backened Development\\Practice_Tutorial\\docs\\blog3.txt',{encoding: 'utf-8'});
const writeStream = fs.createWriteStream('E:\\Backened Development\\Practice_Tutorial\\docs\\blog4.txt');


readStream.on('data',(chunk)=>{
    console.log("-------NEW CHUNK-------")
    console.log(chunk);
    writeStream.write('\n NEW CHUNK\n');
    writeStream.write(chunk);
});