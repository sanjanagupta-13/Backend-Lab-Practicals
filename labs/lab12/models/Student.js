const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const StudentSchema = new Schema({
    name:String,
    email:{type:String, unique:true, required:true},
    password:String,
 
}, { timestamps: true });

module.exports = mongoose.model('Student', StudentSchema);

        