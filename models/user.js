// creating user schema => schema is bluprint => we need to tell mongodb we are storing this type of data

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
})

mongoose.model("User",userSchema)