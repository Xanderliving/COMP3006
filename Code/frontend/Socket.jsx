import React from 'react';
import io from "socket.io-client"; 

// Setup the websocket.
let io = socketIo(server);
io.on("connection", function(socket) {
// When a connection is received, emit a "confirm
// connection" event to the client.
socket.emit("confirm connection", "Connected...");
socket.on("request", function(msg) {
// When a message is received from a client, log it
// on the console and emit a response.
socket.emit("response", "Hello from the server");
});
});

$(function() {
    let socket = io("http://localhost:9000");
    socket.on("confirm connection", function(msg) {
    appendMessage(msg);
    });
    socket.on("response", function(msg) {
    appendMessage(msg);
    });
    socket.emit("request", "Hello from the client");
    });