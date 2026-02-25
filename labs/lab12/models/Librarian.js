const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LibrarianSchema = new Schema({
    name: String,
    password: String,
    email: {type: String, unique: true, required: true},
}, { timestamps: true });

module.exports = mongoose.model('Librarian', LibrarianSchema);