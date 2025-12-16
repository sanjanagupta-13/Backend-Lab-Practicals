const express=require("express");
const app=express();

app.put("/home",(req,res)=>{
    res.send("homepage");
});

app.patch("/about",(req,res)=>{
    res.send("aboutpage");
});

app.get("/contact",(req,res)=>{
    res.send("contactpage");
});

app.post("/profile",(req,res)=>{
    res.send("profilepage");
});

app.delete("/setting",(req,res)=>{
    res.send("settingpage");
});

app.all("/",(req,res)=>{
    res.send("homepage");
});

app.listen(3000,()=>{
    console.log("server is running on port 3000");
}); 