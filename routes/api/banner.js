const express = require('express')
const _ = express.Router()
const bannerController = require('../../controllers/bannerController.js')

_.post("/banner", bannerController)


module.exports = _