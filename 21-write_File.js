var fs = require("fs");
console.log("Going to write file");
fs.writeFile('input.txt','Simple learning!!',function(err){
    if(err){
        return console.error(err);
    }
    console.log("data written ");
    console.log("Let's read newly written file);
    
    fs.readFile('input.txt',function(err,data){
        if(err){
            return console.error(err);
        }
        console.log("Asyn read: "+data.toString());
    });
});
