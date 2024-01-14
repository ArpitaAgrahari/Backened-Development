const fs =require('fs');

// Reading Files
// fs.readFile('E:\\Backened Development\\Practice_Tutorial\\docs\\blog.txt',(err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// console.log("Last Line")



// Writing files
// fs.writeFile('E:\\Backened Development\\Practice_Tutorial\\docs\\blog.txt',  'hello world',()=>{
//     console.log("File was Written");
// });



// directories
// if(!fs.existsSync('E:\\Backened Development\\Practice_Tutorial\\docs\\assets')){
// fs.mkdir('E:\\Backened Development\\Practice_Tutorial\\docs\\assets',(err)=>{
//     if (err){
//         console.log(err);
//     }
//     console.log('Folder Created!!')
// });
// }else{
//     fs.rmdir('E:\\Backened Development\\Practice_Tutorial\\docs\\assets',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('FOlder Deleted');
//     });
// }




// deleting files
if(fs.existsSync('E:\\Backened Development\\Practice_Tutorial\\docs\\Delete.txt')){
    fs.unlink('E:\\Backened Development\\Practice_Tutorial\\docs\\Delete.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("File deleted")
    });
}