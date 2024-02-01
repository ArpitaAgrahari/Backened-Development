var fs  =require("fs");
fs.readFile('input.txt',function(err,file){
    if(err){
        return console.error(err);
    }
    console.log("asynchronus read: "+DataTransfer.toString());
});
var data = fs.readFileSync('input.txt');
console.log("Synchronus read: "+data.toString());
console.log("Program ended");