// Node.js Basics:
//Intro to node.js
//Installing Node.js and npm
// Working with modules
// File system operations
// understanding HTTP module 


// Node js is something called js runtime enviroment

// this is how servers are created 

// Hum js ka code likhenge jo ki wrapper layer of js receive karegi and wo code v8 engine ke c++ module ke sath ek server create krega .


// Npm -> It's a place where many packages are there which have different functionalities 



// npm init -y -> create package.json -> everything about the project 



// File system (fs) Module In node 


// const fs = require("fs");


// writefile

// fs.writeFile("Hey.txt", "Hey kese ho", function (err) {
//     if (err) console.error(err);
//     else console.log("done");
// })


// appendfile
// fs.appendFile("Hey.txt", " pichle me or text", function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });


// rename
// fs.rename("Hey.txt", "hello.txt", function (err) {
//     if (err) console.error(err.message);
//     else console.log("Rename complete!");
    
// });



// copyfile

// fs.copyFile("hello.txt", "./copy.txt", function (err) {
//     if (err) console.log(err.message);
//     else console.log("done");
// })


// unlink -> removes the file

// fs.unlink("hello.txt", function (err) {
//     if (err) console.error(err.message);
//     else console.log("done");  
// })




// http Module In node 

// http And https 

// http -> it's the rule or protocol that helps in sending or receiving the stalked items in the internet.

const http = require('http');

const myServer = http.createServer(function (req, res) {
    res.end("hello world");
})

myServer.listen(3000);
