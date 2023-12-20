const express = require("express");
const app = express();
const mongoose = require('mongoose');
const DrinksModel = require('./models/drinks');
const BasketModel = require('./models/basket');

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://alexw123456w:JFeU7ne3L4adSigl@cluster0.2gorhjl.mongodb.net/Drinksdb");

//drink
app.get("/getDrinks", (req, res) => {
    DrinksModel.find()
        .then((result)=>{
            res.status(200).json(result);
        })
        .catch((error)=>{
            res.status(500).json(error)    
        })
});

app.post("/createDrink", async (req, res) => {
    const drink = req.body
    const newDrink = new DrinksModel(drink);
    await newDrink.save();

    res.json(drink);

});

//basket
app.get("/getBasket", (req, res) => {
    BasketModel.find()
        .then((result)=>{
            res.status(200).json(result);
        })
        .catch((error)=>{
            res.status(500).json(error)    
        })
});

app.post("/addBasket", async (req, res) => {
    const basket = req.body
    const newItem = new BasketModel(basket);
    await newItem.save();

    res.json(basket);

});


  

app.listen(3001, () => {
    console.log("Server Running");
});