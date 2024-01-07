import "./login.css"
import Axios from 'axios';
import image from '../Assests/logo.png'
import { Link } from "react-router-dom";
import { React, useState, useEffect } from 'react';

const Login = () => {
  const [Email, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [usernameExists, setUsernameExists] = useState(false);


  const handleUsername = async () => {
    try {
      const response = await Axios.get(`http://localhost:3001/user/${Email}/${Password}`);
      console.log('Username exists:', response.data);
      setUsernameExists(true);
      window.location.href = '/Home';
    } catch (error) {
      alert('Username does not exist');
    }
  }
  const handleChange = (event) => {
    setUsername(event.target.value);   
  };
  const handlepChange = (event) => {
    setPassword(event.target.value);   
  };

  return (
    <div className="login-page">
      <div className="logo-container">
        <img src={image} alt="Logo" />
      </div>
      <div className="login-form-container">
        <h2>Login</h2>
        
          <label>
            Username:
            <input type="text" value={Email} onChange={handleChange} />
            Password:
            <input type="text" value={Password} onChange={handlepChange} />
          </label>
          <button type="submit" onClick={handleUsername}> Login</button>
       
        <Link to="/Create">Dont have a account?</Link>

      </div>
    </div>
  );
};

export default Login;
