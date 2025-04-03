const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/pinterestclone");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        
    },
    posts:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    },
    dp:{
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true
    },
});

userSchema.plugin(passportLocalMongoose);

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;

