const mongoose = require('mongoose');

const BasketSchema = new mongoose.Schema({
    Customer:{
        type: String,
        required: true,
    },
    Item: {
        type: Number,
        required: true,
    }
});

const BasketModel = mongoose.model("Basket", BasketSchema);
module.exports = BasketModel;