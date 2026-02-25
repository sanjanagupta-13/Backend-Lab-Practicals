const express = require('express'); 
const { getAllUsers, getUserByID, insertUser, updateUser, deleteUser } = require('../services/users.service');

const routeUser =express.Router();

// get all
routeUser.get("/",(req,res)=>{
    const data=getAllUsers();
    res.send(data);
});

// get by id
routeUser.get("/:id",(req,res)=>{
    const data=getUserByID(req.params.id);
    res.send(data);
});

// insert
routeUser.post("/",(req,res)=>{
    const data=insertUser(req.body);
    res.send(data);
});

// edit
routeUser.patch("/:id",(req,res)=>{
    const data=updateUser(req.params.id,req.body);
    res.send("update data"+req.params.id);
});

// delete
routeUser.delete("/:id",(req,res)=>{
    const data=deleteUser(req.params.id);
    res.send(data);
});

module.exports=routeUser;