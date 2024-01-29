const express = require("express");

const app = express();
const PORT = 4001;

const customMiddleware = (req,res,next) => {
    console.log("middleware exexuted!!");
    next();
}


// app.use(customMiddleware);


app.get('/',function(req,res){
    console.log("home");
    res.send("Hello world");
})
app.get('/about',customMiddleware,function(req,res){
    console.log("about");
    res.send("about page");
})

app.listen(PORT,()=>{
    console.log("Server is running on ",PORT);
})