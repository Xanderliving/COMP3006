import React from 'react';
import './contact.css';
import Chat from '../Components/Chat';
import Navbar from '../Components/Navbar';


const Contact = () => {
  return (
    <div className="App">
      {/*Gets navbar componant*/}
      <Navbar />   
      <header className="App-header">
        {/*Gets Chat componant*/}
        <Chat />
      </header>
    </div>
  );
}

export default Contact;