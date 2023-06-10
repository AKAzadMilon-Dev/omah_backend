const RasidenFavorit = require('../models/residenFavoritModels.js')

async function residenFavoritController(req, res){
    const {title, subtitle, description, btn1, btn2} = req.body
    console.log(title, subtitle, description, btn1, btn2)

    const residenfavorit = new RasidenFavorit({
        title: title,
        subtitle: subtitle,
        description: description,
        btn1: btn1,
        btn2: btn2
    })

    residenfavorit.save()

    res.send({success:"Residen favorit created successfully!"})
}



module.exports = residenFavoritController