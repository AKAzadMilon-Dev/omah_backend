const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://fashionbazar:fashionbazar@cluster0.qm7pw.mongodb.net/fashionbazar?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.listen(8000);