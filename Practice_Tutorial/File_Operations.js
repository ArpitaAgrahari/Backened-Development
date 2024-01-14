const fs =require('fs');

// Reading Files
fs.readFile('./blog.txt',(err, data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});


// Writing files

// directories


// deleting files