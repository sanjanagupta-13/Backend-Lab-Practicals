// Write a Node.js program that uses fs.readFile() to read a file named data.txt asynchronously and print its content on the console. 
const fs=require('fs');

console.log("start");
fs.readFile("demo.txt","utf8",(err,data)=>{
    if(err){
        console.log("err=",err);
    }
    console.log("data=",data);

})
console.log("hiiii");
