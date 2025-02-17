const fs = require('fs');

console.log("Start...");

//Blocking
// const result = fs.readFileSync("contacts.txt","utf-8");
// console.log(result);

//Non-Blocking
const result = fs.readFile("contacts.txt","utf-8",(err,data)=>{
    if (err) {
        console.log("Error message: ",err); 
    }else{
        console.log(data);    
    }
});


console.log("End");
