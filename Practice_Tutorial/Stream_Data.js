const fs = require('fs'); 
const readStream = fs.createReadStream('E:\\Backened Development\\Practice_Tutorial\\docs\\blog3.txt');

readStream.on('data',(chunk)=>{
    console.log("-------NEW CHUNK-------")
    console.log(chunk);
});