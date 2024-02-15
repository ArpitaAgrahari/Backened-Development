var http=require("http"); 
//require is amodule that requires to work with web server.

http.createServer(function(req, res){

const fs = require('fs');


//for reading the file
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('There was an error reading the file!', err);
        return;
    }

    // Modify the data here
    let modifiedData = data.replace('old text', 'new text');

    fs.writeFile('input.txt', modifiedData, 'utf8', (err) => {
        if (err) {
            console.error('There was an error writing to the file!', err);
        } else {
            console.log('File has been updated');
        }
        //finalizing the content
    });
});
}).listen(8080);