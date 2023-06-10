const RasidenBerbagaiKota = require('../models/residenBerbagaiKotaModels.js')

async function residenBerbagaiController(req, res){
    const {title, address} = req.body
    console.log(title, address)

    const residenBerbagai = new RasidenBerbagaiKota({
        title: title,
        address: address
    })

    residenBerbagai.save()

    res.send({success:"Residen Berbagai Kota created successfully!"})
}



module.exports = residenBerbagaiController