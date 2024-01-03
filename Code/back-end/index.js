const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3001;
app.use(cors());
app.use(bodyParser.json());
const http = require("http");
const { Server } = require("socket.io");
app.use(express.json());


const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for incoming messages
  socket.on('chat message', (msg) => {
    // Broadcast the message to all connected clients
    io.emit('chat message', msg);
  });

  // Listen for disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3002, () => {
  console.log("SERVER IS RUNNING");
});

mongoose.connect("mongodb+srv://alexw123456w:JFeU7ne3L4adSigl@cluster0.2gorhjl.mongodb.net/Drinksdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
const itemSchema = new Schema({
  Name: String,
  Description: String,
  Cost: Number,
});

const Item = mongoose.model('Item', itemSchema);

const BasketSchema = new Schema({
  Customer: String,
  Item: String,
  Cost: Number,
  Quantity: Number,
});

const Basket = mongoose.model('Basket', BasketSchema);

const UserSchema = new Schema({
  Email: String,
  Password: String,
});

const User = mongoose.model('User', UserSchema);


app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/items', async (req, res) => {
  const newItem = new Item(req.body);
  try {
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/items/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/items/:id', async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    res.json(deletedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//For Basket

app.get('/Basket', async (req, res) => {
  try {
    const basket = await Basket.find();
    res.json(basket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/Basket', async (req, res) => {
  const newBasket = new Basket(req.body);
  try {
    const SavedBasket = await newBasket.save();
    res.json(SavedBasket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/Basket/:id', async (req, res) => {
  try {
    const updatedBasket = await Basket.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedBasket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/Basket/:id', async (req, res) => {
  try {
    const deletedBasket = await Basket.findByIdAndDelete(req.params.id);
    res.json(deletedBasket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//For User

app.get('/User', async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/User', async (req, res) => {
  const newUser = new User(req.body);
  try {
    const SavedUser = await newUser.save();
    res.json(SavedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/User/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/User/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.json(deletedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// server.js









