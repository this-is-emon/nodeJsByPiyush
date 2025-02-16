// Write a Node.js script to delete the "output.txt" file.
const { error } = require('console');
const fs = require('fs');

fs.unlink('output.txt',(err) => {
    if (err) {
        console.log("Error deleting file: ",err);
        
    }else{
        console.log("File deleted successfully");
    }
});