const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken");

app.set("view engine","ejs");
app.use(express.json());
app.use(cookieParser());

app.get("/",(req,res)=>{
    let token = jwt.sign({email:"disha@example.com"},"secret")
    res.cookie("token",token);
    res.send("Done")
});

app.get('/read',(req,res)=>{
    let data = jwt.verify(req.cookies.token,"secret");
    console.log(data);
    
})

app.listen(3000);