const express = require('express');
const app = express();
const userModel = require('./usermodel');
const usermodel = require('./usermodel');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: "abc",
        email: "abc@example.com",
        username: "abc123",
    })
    res.send(createdUser);
  });

  app.get('/update', async (req, res) => {

    let updatedUser = await userModel.findOneAndUpdate({username: "abc123"}, {name: "abcde"}, {new: true})

    res.send(updatedUser);

  });

  app.get('/read', async (req, res) =>{
    let users = await userModel.find();
    res.send(users);
  })

  app.get('/delete', async(req, res) =>{
    let deletedUser = await userModel.findOneAndDelete({name: "abcde"});
    res.send(deletedUser);
  })

app.listen(3000);