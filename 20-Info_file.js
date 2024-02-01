var fs = require("fs");
console.log("going to get file info")
fs.stat('input.txt',function(err,stats){
    if(err){
        return console.error(err);
    }
    console.
});