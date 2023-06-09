const mongoose = require("mongoose");

const {Schema} = mongoose;

const bannerSchema = new Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    search:{
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


module.exports = mongoose.model("Banner", bannerSchema);