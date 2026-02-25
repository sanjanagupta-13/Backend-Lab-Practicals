const fs=require('fs');
fs.copyFile('demo.txt','backup.txt',(err)=>{
    if(err){
        console.log("err=",err);
    }
    else{
        console.log("copy successfully.");
    }
})