const express = require('express');
const cors = require('cors')
const app = express();
const dbConnection = require('./config/dbConnection.js')

app.use(cors())
dbConnection()

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.listen(8000);