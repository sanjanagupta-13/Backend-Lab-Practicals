const fs=require('fs');
fs.writeFile('1.py','welcome to world',(err)=>{
    if(err){
        console.log("err=",err);
    }
    console.log("write successfully");
});
