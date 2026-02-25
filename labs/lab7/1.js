const http=require("http");
const Server=http.createServer((req,res)=>{
    res.writeHead(200, {"content-type": "text/html"})
    
    if(req.url === '/'){
        res.end("hello world");
    }
})

Server.listen(3000,()=>{
    console.log("server at port 3000");
})
