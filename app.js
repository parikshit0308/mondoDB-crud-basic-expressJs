const express = require('express');
const app = express();
const userModel = require('./usermodel');
const usermodel = require('./usermodel');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: "paru😭",
        email: "mrunmayee@gmail.com",
        username: "mrunmayee"
    })
    res.send(createdUser);
  });

  app.get('/update', async (req, res) => {

    let updatedUser = await userModel.findOneAndUpdate({username: "mrunmayee"}, {name: "mayee"}, {new: true})

    res.send(updatedUser);

  });

  app.get('/read', async (req, res) =>{
    let users = await userModel.find();
    res.send(users);
  })

  app.get('/delete', async(req, res) =>{
    let deletedUser = await userModel.findOneAndDelete({name: "paru😭"});
    res.send(deletedUser);
  })

app.listen(3000);