const express = require('express')
const _ = express.Router()
const bannerRoutes = require('./banner')
const cartRoutes = require('./cart')

_.use("/banner", bannerRoutes)
_.use("/cart", cartRoutes)

module.exports = _