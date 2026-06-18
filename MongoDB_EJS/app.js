const express = require("express")
const app = express();
const path = require('path');
const userModel = require('./Models/user');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
   res.render("index.ejs");
})

app.get('/read',async (req,res)=>{
    let users = await userModel.find();
    res.render("read.ejs",{users});
})

app.get('/edit/:userid',async (req,res)=>{
    let user = await userModel.findOne({_id:req.params.userid});
    res.render("edit.ejs",{user});
})

app.get('/delete/:id',async (req,res)=>{
    let user = await userModel.findOne({_id:req.params.userid});
})

app.post('/update/:id',async (req,res)=>{
    let {img,email,name} = req.body;
    let users = await userModel.findOneAndUpdate({_id: req.params.id},{img,name,email});
    res.redirect("/read");
})

app.post('/create',async (req,res)=>{
    let {name,email,img} = req.body
    let CreatedUser = await userModel.create({
        name,
        email,
        img
    })
    res.redirect("/read");
})

app.listen(3000);