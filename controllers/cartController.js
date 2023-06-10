const Cart = require('../models/cartModels.js')

async function cartController(req, res){
    const {title, subtitle, number, description, link} = req.body
    console.log(title, subtitle, number, description, link)

    const cart = new Cart({
        title: title,
        subtitle: subtitle,
        number: number,
        description: description,
        link: link
    })

    cart.save()

    res.send({success:"cart Created successfully!"})
}



module.exports = cartController