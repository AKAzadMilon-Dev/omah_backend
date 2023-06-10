const express = require('express')
const _ = express.Router()
const cartController = require('../../controllers/cartController.js')

_.post("/cart", cartController)


module.exports = _