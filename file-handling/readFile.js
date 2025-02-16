// Create a file named example.txt with some text content.
// Write a Node.js script to read the file and display its content in the console.

const fs = require("fs");

fs.readFile('example.txt','utf-8',(err,data)=>{
    if (err) {
        console.log("Error message: ",err);
        
    }else{
        console.log(data);
    }
});