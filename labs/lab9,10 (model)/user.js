// const mongoose=require('mongoose');
// const schema=mongoose.Schema({
//     name:String,
//     email:{type:String,require:true, unique:true},
//     password:String,
//     phone:Number
// },{timestamps:true});

// module.exports=mongoose.model('User',schema);

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:String,
    email:{type:String,required:true,unique:true},
    password:String,
    phone:Number
},{timestamps:true})

module.exports=mongoose.model('user',userSchema)