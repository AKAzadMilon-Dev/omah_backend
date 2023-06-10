const Banner = require('../models/bannerModels.js')

async function bannerController(req, res){
    const {title, description, search} = req.body
    console.log(title, description, search)

    const banner = new Banner({
        title: title,
        description: description,
        search: search
    })

    banner.save()

    res.send({success:"banner Created successfully!"})
}


module.exports = bannerController