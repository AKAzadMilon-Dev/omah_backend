const mongoose = require('mongoose');

function dbConnection(){
    mongoose.connect('mongodb+srv://ecommerce:ecommerce@cluster0.qm7pw.mongodb.net/ecommerce?retryWrites=true&w=majority')
      .then(() => console.log('Connected!'));
}

module.exports = dbConnection;