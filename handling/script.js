const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req , res) {
    res.send("Main page");
})

app.get("/about", function (req, res) {
    res.send("For about page");
}) 

app.get("/profile", function (req, res) {
    res.send("For profile page");
}) 

app.listen(3000);

