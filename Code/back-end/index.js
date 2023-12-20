
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const DrinksModel = require('./models/drinks');
const BasketModel = require('./models/basket');
//const http = require('http');
//const socketIO = require('socket.io');
//const server = http.createServer(app);
//const io = socketIO(server);
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

mongoose.connect("mongodb+srv://alexw123456w:JFeU7ne3L4adSigl@cluster0.2gorhjl.mongodb.net/Drinksdb");

//drink
app.get("/getDrinks", (req, res) => {
    DrinksModel.find()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
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
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(500).json(error)
        })
});

app.post("/addBasket", async (req, res) => {
    const basket = req.body
    const newItem = new BasketModel(basket);
    await newItem.save();

    res.json(basket);

});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});



