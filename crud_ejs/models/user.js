const mongoose = require('mongoose')

mongoose.connect(
  "mongodb+srv://admin:yZ4BbHMsXJFzmTHX@cluster0.hecdl.mongodb.net/"
);

const userSchema = mongoose.Schema({
    image: String,
    email: String,
    name: String
})

module.exports = mongoose.model('user' , userSchema)