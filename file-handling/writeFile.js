// Write a Node.js script to create a new file named "output.txt" and write the text "Hello, World!" into it.

const fs = require("fs");

fs.writeFile('output.txt',"Hello, World!",(err,data)=>{
    if (err) {
        console.log("Error message: ",err);
    }else{
        console.log("File has created and written Successfully!");
        
    }
});