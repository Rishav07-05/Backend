const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


app.use(cookieParser());


const saltRounds = 10;

// setting a cookie 
app.get('/', (req, res) => {
    res.cookie("name", "riss");
    res.send("done");
});

app.get('/hash', (req, res) => {
  // checking for password using bcrypt

//   const hash = bcrypt.hashSync("Risss", saltRounds);
//   console.log(hash);
//     res.send("Hash generated: " + hash);
    
    bcrypt.compare(
      "Risss",
      "$2b$10$Zh4oElblxKUgWIz7Kmv9COk0ycloRPlFoVuMfDpYL/A2gptAczYhe",
      function (err, result) {
          // result == true
          console.log(result);
          
      }
    );
})

app.get('/jwt', (req, res) => {
  let token = jwt.sign({ email: "ris@gmail.com" }, "secret"); 
  res.cookie("token" , token)
  // console.log(token);
  res.send("done");
})


app.get('/data', (req , res) => {
  let data = jwt.verify(req.cookies.token, "secret");
  console.log(data);
})

// read a cookie 
app.get('/read', function (req , res) {
  console.log(req.cookies);
  res.send("read page");
})

app.listen(3000);