import "./login.css"
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import image from '../Assests/logo.png'


const CreateAccount = () => {
  const [listofItems, setListOfItems] = useState([]);

  //Gets all users from the database
  useEffect(() => {
    Axios.get(`http://localhost:3001/User/`).then((response) => {
      setListOfItems(response.data);
          });
  }, []);

  //Posts the user to the database
  const handlePost = async () => {
    const input1 = document.getElementById('Create2').value;
    const input2 = document.getElementById('Create3').value;

    // Check if both inputs have data
    if (input1.trim() === '' || input2.trim() === '') {
      alert('Both inputs must have data.');
      return;
    }
    try {
      // Check if user already exists
      const response = await Axios.post('http://localhost:3001/User/', {
        Email: document.getElementById('Create2').value,
        Password: document.getElementById('Create3').value,
      });
      window.location.href = 'http://localhost:3000/Home';

      console.log('Item posted successfully:', response.data);
    } catch (error) {
      console.error('Error posting item:', error);
    }
  
  };
  return (
    <div className="login-page">
      <div className="logo-container">
        <img src={image} alt="Logo" />
      </div>
      <div className="login-form-container">
        <h2>Create Account</h2>
        <forum>
          {/*Gets user input*/}
          <label>Enter a username:</label>
          <input id="Create2" type="text"  placeholder="Enter Username" required/>

          <label>Enter a password:</label>
          <input id="Create3" type="password"  placeholder="Enter Password" required/>

          <button type="submit" onClick={() => handlePost()}>Create Account</button> <br></br>
        </forum>

      </div>
    </div>
  );
};

export default CreateAccount;
