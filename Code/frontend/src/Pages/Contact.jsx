import React, { useState, useEffect } from 'react';
import './contact.css';
import Chat from '../Components/Chat';


const Contact = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Chat />
      </header>
    </div>
  );
}

export default Contact;