const express = require('express');
const app = express();
const userModel = require('./models/user')
const postModel = require('./models/post')



app.get('/', (req , res) => {
    res.send("Working fine");
})


app.get('/create', async(req, res) => {
    // let { username, email, age } = req.body;
    let createdUser = await userModel.create({
        username : "riss",
        age: 1,
        email: "ris69@gmail.com"
    })

    res.send(createdUser)
})


app.get("/post/create", async (req, res) => {
    let post = await postModel.create({
      postdata: "Hey rishav here",
      user: "66f094f2fb1f1895f7ad5d44",
    });

    let user = await userModel.findOne({ id: "66f094f2fb1f1895f7ad5d44" })
    user.post.push(post.id);
    await user.save();
    res.send({post , user});
})


app.listen(3000);