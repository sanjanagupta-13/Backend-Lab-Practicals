const express=require("express");
const app=express;
require("dotenv").config()

app.use(express.json());
app.get

app.post("/register",(req,res)=>{
    const {name,email,id,password}=req.body;
    req.send(`name:${name},email:${email},id:${id},password:${password}`);
});

app.listen(process.env.port, () => {
    console.log(`server is running on port  ${process.env.port}`);
});
