import Navbar from "../Components/Navbar";
import "./contact.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const Contact = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const socket = io('http://localhost:3001');

    socket.on('connect', () => {
      console.log('Connected to server');
      setSocket(socket);
    });

    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  const sendMessage = () => {
    if (socket && inputMessage.trim() !== '') {
      socket.emit('message', { text: inputMessage, username });
      setInputMessage('');
    }
  };

  return (
    <div>
      <Navbar />
    <div className="chat-container">
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index}>
            <span>{message.timestamp}</span> - <span>{message.username}:</span> {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your Name"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
    </div>
  );
};

export default Contact;