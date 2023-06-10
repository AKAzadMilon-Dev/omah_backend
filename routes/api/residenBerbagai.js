const express = require('express')
const _ = express.Router()
const residenBerbagaiController = require('../../controllers/residenBerbagaiController.js')

_.post("/residenberbagai", residenBerbagaiController)


module.exports = _