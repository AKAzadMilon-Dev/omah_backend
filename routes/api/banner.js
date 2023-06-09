const express = require('express')
const _ = express.Router()


_.get("/banner", (req, res)=>{
    res.send("ami banner routes")
})

module.exports = _