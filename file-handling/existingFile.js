// Write a Node.js script to check if a file named example.txt exists. 
// If it does, read and display its content; otherwise, display "File does not exist."

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname,'example.txt');

if (fs.existsSync(filePath)) {
    fs.readFile(filePath,'utf-8',(err,data)=>{
        if (err) {
            console.log("Can't read the file: ",err);
            
        }else{
            console.log("File content: ",data);
            
        }
    });
}else{
    console.log("The file does not exists");
    
}

