const http=require("http");
const Server=http.createServer((req,res)=>{
    res.writeHead(200, {"content-type": "text/html"})
    
    if(req.url === '/'){
        res.end("home page");
    }
    else if(req.url === '/about'){
        res.end("about page");
    }
    else if(req.url === '/contact'){
        res.end("contact page");
    }
    else{
        res.end("page not found");
    }
})

Server.listen(3001,()=>{
    console.log("server at port 3000");
})
