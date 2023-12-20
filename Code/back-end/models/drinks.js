const mongoose = require('mongoose');

const DrinksSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true,
    },
    Quantity: {
        type: Number,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
});

const DrinksModel = mongoose.model("Drinks", DrinksSchema);
module.exports = DrinksModel;