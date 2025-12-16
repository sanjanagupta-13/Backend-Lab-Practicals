// const fs=require('fs');
// data=fs.writeFileSync('1.py','welcome to world');
// console.log(data);

const fs=require('fs');
fs.appendFile('demo.txt','update msg',(err)=>{
    if(err){
        console.log("err=",err);
    }
    else{
    console.log("append successfully");

    }
});
