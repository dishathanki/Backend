const express = require("express");
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');

app.get('/',(req,res)=>{
    res.send("Mahadev Har")
})

app.get('/create',async (req,res)=>{
    let user = await userModel.create({
       username:"disha",
       age:21,
       email:"d@gmail.com"
    });
    res.send(user);
})

app.get('/post/create',async (req,res)=>{
    let post = await postModel.create({
        postdata:"sample post",
        user: "6a33a1bc991c64d701c70a36",
    });
    let user = await userModel.findOne({_id:"6a33a1bc991c64d701c70a36"});
    user.posts.push(post._id);
    await user.save();

    res.send({post,user});
})

app.listen(3000);