const { getAll } = require("../models/user.model");

function getAllUsers(){
    const data=getAll();
    return data;
}

function getUserByID(id){
    return "Get user by id service called for" +id;
}

function insertUser(formData){
    return "insert user ";
}

function updateUser(id,formData){
    return "update user by id service called for" +id;
}

function deleteUser(id){
    return "delete user by id service called for" +id;
}

module.exports={getAllUsers,getUserByID,insertUser,updateUser,deleteUser};