const express = require('express');
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// the above two lines are the parsers for the form


app.use(express.static(path.join(__dirname, 'public')));
// to get touch with css , imgs and frontend js


app.set('view engine', 'ejs'); // setting ejs view engine for dynamic html layouts 

//__dirname => gives the path of the folder in which you are working 

app.get("/", function (req, res) {
    res.render("index");
});


app.get("/profile/:username", function (req , res) {
    res.send(`Welcome, ${req.params.username}`);
}) // dynamic routing


app.get("/profile/:username/:age", function (req , res) {
    res.send(`Welcome, ${req.params.username} of age ${req.params.age}`);
}) // dynamic routing

app.listen(3000 , function(){
    console.log("Quite good");
})