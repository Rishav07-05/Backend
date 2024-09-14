const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user')



app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.render("index");
})

app.get('/read', async (req, res) => {
    let readUser = await userModel.find()
    res.render("read" , {users: readUser});
})

app.get('/edit/:userid', async (req, res) => {
    let updateUser = await userModel.findOne({ _id: req.params.userid });
    res.render("edit", { users: updateUser});
})

app.post('/update/:userid', async (req, res) => {
    let { image, name, email } = req.body;
    let updateUser = await userModel.findOneAndUpdate({ _id: req.params.userid } , {image , name , email} , {new : true});
    res.redirect("/read");
})

app.get('/delete/:id', async (req, res) => {
    let users = await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect("/read")
})

app.post('/create', async (req, res) => {
    let { name, email, image } = req.body;

    let createdUser = await userModel.create({
        name,
        email,
        image
    })
    res.redirect('/read')
})

app.listen(3000);