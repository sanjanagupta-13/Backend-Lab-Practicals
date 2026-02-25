// const fs=require("fs");
// const express=require("express");
// const app=express();

// app.get("/demo",(req,res)=>{
//     res.send(fs.readFileSync("labs/demo.txt"));
// });

// app.get("/backup",(req,res)=>{
//     res.send(fs.readFileSync("labs/demo.txt"));
// });

// app.listen(3000,()=>{
//     console.log("server is running on port 3000");
// }); 

const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
require("dotenv").config()

const filePath = path.join(__dirname, "../demo.txt");

app.get("/demo", (req, res) => {
    res.send(fs.readFileSync(filePath, "utf-8"));
});

app.get("/backup", (req, res) => {
    res.send(fs.readFileSync(filePath, "utf-8"));
});

app.listen(process.env.port, () => {
    console.log(`server is running on port  ${process.env.port}`);
});
