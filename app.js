const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 4001;
const {MONGOURI} = require('./keys')

// Connecting mongoose
mongoose.connect(MONGOURI)

mongoose.connection.on('connected',()=>{
    console.log("Connected to mongo");
})

mongoose.connection.on('error',(err)=>{
    console.log("error connecting ",err);
})  

app.listen(PORT,()=>{
    console.log("Server is running on ",PORT);
})