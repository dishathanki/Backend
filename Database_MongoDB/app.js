const express = require("express");
const userModel = require('./usermodel');
const app = express()

app.get('/',(req,res)=>{
    res.send(" Mahadev har ");
})

app.get('/create',async (req,res)=>{
   let createduser = await userModel.create({
        name:"disha",
        email:"dishathanki2005@gmail.com",
        username:"disha"
    })
    res.send(createduser);
})

app.get('/update',async (req,res)=>{
    let updateduser = await userModel.findOneAndReplace({username:"krupa"},{name:"krupa thanki"},{new:true})
    res.send(updateduser);
})

app.get("/read", async (req,res)=>{
    let users = await userModel.find()
    res.send(users);
})

app.get("/delete", async (req,res)=>{
    let users = await userModel.findOneAndDelete({username:"disha"})
    res.send(users);
})

app.listen(3000);