const express = require('express');
const app = express();

const userModel = require('./usermodel')

app.get('/', (req, res) => {
    res.send("Hey");
})


app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: "Risss",
        email: "riss@gmail.com",
        username: "Rissssssss"
    })
    res.send(createdUser)
})

app.get('/read' , async (req , res) => {
    let readUser = await userModel.findOne();
    res.send(readUser);
})

app.get('/update', async (req, res) => {
    
    let updatedUser = await userModel.findOneAndUpdate({
        usernmae:"Risss"
    }, {
        name: "Rishav"
    } , {new : true})
    res.send(updatedUser);
})


app.get('/delete' , async (req , res) => {
    let deleteUser = await userModel.findOneAndDelete({usernam: "Risss"});
    res.send(deleteUser);
})




app.listen(3000);