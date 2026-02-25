const fs=require('fs');
fs.readdir('/Users',(err,data)=>{
    if(err){
        console.log("err=",err);
    }
    else{
        for(i=0;i<=data.length;i++){
            console.log("data=",data[i]);

        }

    }
});
