const express = require('express')
const _ = express.Router()
const bannerRoutes = require('./banner')
const cartRoutes = require('./cart')
const residenFavoritRoutes = require('./residenFavorit')

_.use("/banner", bannerRoutes)
_.use("/cart", cartRoutes)
_.use("/residenfavorit", residenFavoritRoutes)

module.exports = _