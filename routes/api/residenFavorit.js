const express = require('express')
const _ = express.Router()
const residenFavoritController = require('../../controllers/residenFavoritController.js')

_.post("/residenfavorits", residenFavoritController)


module.exports = _