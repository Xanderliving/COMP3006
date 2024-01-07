// src/Chat.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';



const Chat = () => {

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const socket = io('http://localhost:3002', {
        reconnection: true,
        //reconnectionAttempts: 3, // Adjust as needed
        transports: ['websocket'],
        upgrade: false,  // Set this option to avoid CORS issues

    });

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });

        return () => {
            socket.disconnect();
        };
    }, [messages]);

    const sendMessage = () => {
        socket.emit('message', message);
        setMessage('');
    };

    return (
        <div>
            <div>
                <ul>
                    {messages.map((msg, index) => (
                        <li key={index}>{msg}</li>
                    ))}
                </ul>
            </div>
            <div>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
