// Topics 
    // 1. Basics of Node.js
    // 2. Intro to it
    // 3. Installing it
            // node & npm
            // working with node and npm
            // npm init
            // node basic usage
    // 4. working with modules.
    // 5. file system operations.
    // 6. understanding HTTP module

// what is Node.js
    // basically node.js is javascript runtime environment 

const fs = require('fs');

// writing into file through fs module
    // fs.writeFile("hey.txt","hey how are you",function(err){
    //     if(err) console.log(err);
    //     else console.log("done");
    // })

// appending data into the file
    // fs.appendFile("hey.txt","hey how are you what r you doing ?",function(err){
    //     if(err) console.log(err);
    //     else console.log("done");
    // })

// Renaming the file
    // fs.rename("hey.txt","Hello.txt",function(err){
    //     if(err) console.log(err);
    //     else console.log("done");
    // })

// copy filee
    // fs.copyFile("Hello.txt","./Copy/Copy1.txt",function(err){
    //     if(err) console.log(err);
    //     else console.log("done");
    //  })

// Deleting the filee -: unlink
    // fs.unlink("Hello.txt",function(err){
    //     if(err) console.log(err);
    //     else console.log("done");    
    // })

// remove directory by default it can only remove empty folder to remove folder which have files in it we have to do recursive:true
    // fs.rm("./Copy",{recursive:true},function(err){
    //     if(err) console.log("removed");
    //     else console.log("Removed");
    // })

                            //  HTTP Module

const http = require('http');

const server = http.createServer(function(req,res){
    res.end("Mahadev Mahadev");
})
server.listen(3000);