const fs=require('fs');
fs.mkdir('my-data',(err)=>{
    if(err){
        if(err.code === 'EEXIST'){
            console.log("folder is exist",err);
        }
        else{
            console.log('folder is not exist')
        }
    }
    else{
        console.log("successfully.");
    }
   
});