const fs=require('fs');
fs.unlink('hello.txt',(err)=>{
    if(err){
        console.log("err=",err);
    }
    console.log(" successfully deleted");
});