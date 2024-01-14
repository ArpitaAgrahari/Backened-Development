const fs =require('fs');

// Reading Files
fs.readFile('E:\\Backened Development\\Practice_Tutorial\\docs\\blog.txt',(err, data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});


// Writing files

// directories


// deleting files