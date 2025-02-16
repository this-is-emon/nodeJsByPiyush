/**-- Solution - Step 1 - Read the JSON file  --**/
// Write a Node.js script to : "Read the JSON file"

const fs = require('fs');
const path = require('path');

// Define the path to the JSON file
const filePath = path.join(__dirname,'data.json');

// Read the JSON file
fs.readFile(filePath,'utf-8',(err,data)=>{
    if (err) {
        console.log("Error reading the JSON file: ",err);
        return;
    }
    try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);
         // Log the parsed JSON data to the console
        console.log("JSON data",jsonData);
        
    } catch (parseError) {
        console.log("Error parsing JSON: ",parseError);
    }
});


