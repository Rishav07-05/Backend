// Express.js framework:
// Introduction to express.js

//Express.js ek npm ka package hai framework hai
//which manages everything from receiving the request and giving the response back

// Nodemon => package basically used to reload the server time by time of the changes 


// Routing
// Middleware 
// Request and response handling
// Error handling



// setting up a basic express app

// const express = require("express");
// const app = express();

// // we can create routes 
// // what are routes => remaining part in the domain name is called routes like => youtube.com/profile , Here /profile is a route


// // app.get(route , requestHandler) => "/" , function


// app.get("/", function (req, res) {
//     res.send("Champ");
// });

// app.get("/profile", function (req, res) {
//     res.send("Champ coach")
// });

// app.listen(3000);




// Middlewares => jab bhi server request accept karta hain waha se route je beech pahuchne tak agar aap us request ko beech me rokte ho and kuch perform karte ho, to ye element middleware kehlata hai


// using of middleware 

const express = require('express');
const app = express();

app.use(function (req , res , next) {
    console.log("Middleware in use");
    next(); // => used to further forward the request 
});

app.use(function (req , res , next) {
    console.log("Middleware in use for about page");
    next(); // => used to further forward the request 
});

app.get("/", function (req , res) {
    res.send("I am risss");
});

app.get("/about", function (req , res) {
    res.send("About me :) ");
});

app.get("/profile", function (req , res) {
    return next(new Error("Something went Wrong"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong , we gonna fix it later :(");
});

app.listen(5000);