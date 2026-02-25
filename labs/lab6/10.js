const fs=require('fs');
fs.watch('demo.txt',(eventType,filename)=>{
    console.log(`file ${filename} changed: ${eventType}`);
});
