const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname,'data.json');

fs.readFile(filePath,'utf-8',(err,data)=>{
    if (err) {
        console.log("Error reading file: ",err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);
        jsonData.city = "New York";
        console.log(jsonData);
        
    } catch (parseError) {
        console.log("Error parsing JSON: ",parseError);
        
    }
});