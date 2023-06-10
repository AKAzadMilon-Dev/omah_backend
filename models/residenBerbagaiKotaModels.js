const mongoose = require("mongoose");

const {Schema} = mongoose;

const residenBerbagaiKotaSchema = new Schema({
    title:{
        type: String
    },
    address:{
        type: String
    },
    update:{
        type: Date,
    },
    created:{
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model("ResidentBerbagai", residenBerbagaiKotaSchema);