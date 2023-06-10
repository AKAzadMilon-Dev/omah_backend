const mongoose = require("mongoose");

const {Schema} = mongoose;

const residenFavoritSchema = new Schema({
    title:{
        type: String
    },
    subtitle:{
        type: String
    },
    description:{
        type: String
    },
    btn1:{
        type: String
    },
    btn2:{
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


module.exports = mongoose.model("ResidentFavorit", residenFavoritSchema);