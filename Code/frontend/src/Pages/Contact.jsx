import Navbar from "../Components/Navbar";
import "./contact.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";


const socket = io('http://localhost:3002'); // Replace with your server URL

function Contact() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Listen for incoming messages
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '' && username.trim() !== '') {
      // Send the message to the server along with the username
      socket.emit('chat message', `${username}: ${newMessage}`);

      // Clear the input fields
      setNewMessage('');
      setUsername('');
    }
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
          placeholder="Enter your name..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Contact;