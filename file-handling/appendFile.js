// Write a Node.js script to append the text "This is a new line." to the "output.txt" file.

const fs = require("fs");

fs.appendFile("output.txt","\nThis is a new line",(err,data)=>{
    if (err) {
        console.log("Error message : ",err);
    }else{
        console.log("The Text is successfully appendent!");
        
    }
});