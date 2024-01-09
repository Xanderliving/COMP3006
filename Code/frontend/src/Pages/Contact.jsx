import React, { useState, useEffect } from 'react';
import './contact.css';
import Chat from '../Components/Chat';
import Navbar from '../Components/Navbar';


const Contact = () => {
  return (
    <div className="App">
      <Navbar />   
      <header className="App-header">
        <Chat />
      </header>
    </div>
  );
}

export default Contact;