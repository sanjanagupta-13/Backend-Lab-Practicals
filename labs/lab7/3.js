const fs=require("fs");
const http =require("http");

const Server=http.createServer((req,res)=>{
    res.writeHead(200, {"content-type": "text/html"})
    
    if(req.url === '/demo'){
        res.end(fs.readFileSync("demo.txt","utf8"));
    }
    else if(req.url === '/backup'){
        res.end(fs.readFileSync("backup.txt"));
    }
    else if(req.url === '/my-data'){
        res.end(fs.readFileSync("my-data.txt"));    }
    
})

Server.listen(3000,()=>{
    console.log("server at port 3000");
})
