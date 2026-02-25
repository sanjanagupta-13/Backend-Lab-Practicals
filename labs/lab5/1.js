const child_process=require("child_process");

child_process.exec("node --version",(err,stdout,stderr)=>{
    if(err){
        console.log("error= ",err);
    }
     if(stderr){
        console.log("stderr= ",stderr);
    }
  
        console.log(stdout);
    
});