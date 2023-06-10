const mongoose = require("mongoose");

const {Schema} = mongoose;

const cartSchema = new Schema({
    title:{
        type: String
    },
    subtitle:{
        type: String
    },
    number:{
        type: String
    },
    description:{
        type: String
    },
    link:{
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


module.exports = mongoose.model("Cart", cartSchema);