const mongoose = require('mongoose');

function dbConnection(){
    mongoose.connect('mongodb+srv://fashionbazar:fashionbazar@cluster0.qm7pw.mongodb.net/fashionbazar?retryWrites=true&w=majority')
      .then(() => console.log('Connected!'));
}

module.exports = dbConnection;