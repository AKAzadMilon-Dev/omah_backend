const Banner = require('../models/bannerModels.js')

async function bannerController(req, res){
    const {title, description, search} = req.body
    console.log(title, description, search)
}


module.exports = bannerController