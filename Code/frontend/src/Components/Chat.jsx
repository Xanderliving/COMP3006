import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

//Fixes Cors error
const socket = io('http://localhost:3002', {
    transports: ['websocket'],
    upgrade: false, 
});

function App() {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');

    useEffect(() => {
        socket.on('message', (message) => {
          setMessages((prevMessages) => [...prevMessages, message]);
        });
        return () => {
          socket.off('message');
        };
      }, []);

    //Gets messages from input and sends them to the server
    const sendMessage = () => {
        if (messageInput.trim() !== '') {
            socket.emit('message', { text: messageInput });
            setMessageInput('');
        }
    };

    return (
        <div>
            <div>
                <h2>Chat Room</h2>
                {/*Displays messages*/}
                <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '200px', marginBottom: '10px' }}>
                    {messages.map((msg, index) => (
                        <div key={index}>{msg.text}</div>
                    ))}
                </div>
                <div>
                    <input
                        type="text"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default App;

