const mongoose = require('mongoose');

const BasketSchema = new mongoose.Schema({
    Customer:{
        type: String,
        required: true,
    },
    Item: {
        type: String,
        required: true,
    },
    Cost: {
        type: Number,
        required: true,
    }
});

const BasketModel = mongoose.model("basket", BasketSchema);
module.exports = BasketModel;