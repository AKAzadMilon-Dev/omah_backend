const express = require('express')
const _ = express.Router()
const bannerRoutes = require('./banner')

_.use("/", bannerRoutes)

module.exports = _