const fs=require('fs');

try{
    data=fs.readFileSync("demo.txt","utf8");
    console.log("data=",data);
}
catch(err){
    console.log("err=",err);
}

console.log("hii");
