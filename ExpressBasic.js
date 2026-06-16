const express = require('express'); 
const { log, error } = require('node:console');
const app = express()

app.use(function(req,res,next){
    console.log("Middleware working");
    next();
})


app.use(function(req,res,next){
    console.log("Middleware working one more time");
    next();
})

// Routing
app.get("/",function(req,res){
    res.send("hiee disha this side");
})
app.get("/about",function(req,res){
    res.send("This is about page");
})
app.get("/profile",function(req,res,next){
    return next(new Error("Not Implemented"));
})

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send("something went wrong we don't have any idea about it!");
})

app.listen(3000)