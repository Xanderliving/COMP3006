import "./login.css"
import Axios from 'axios';
import image from '../Assests/logo.png'
import { Link } from "react-router-dom";
import { React ,useState, useEffect } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Construct the URL with email and password as query parameters
      const url = `http://localhost:3001/user`;

      // Make a GET request to the server
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        // Assuming you have a function to handle successful login, e.g., redirecting to another page
        handleSuccessfulLogin(data);
      } else {
        // Handle authentication failure (e.g., show an error message)
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  const handleSuccessfulLogin = (data) => {
    // Implement logic for successful login, e.g., redirect to another page
    console.log('Login successful:', data);
  };

  return (
    <div className="login-page">
      <div className="logo-container">
        <img src={image} alt="Logo" />
      </div>
      <div className="login-form-container">
        <h2>Login</h2>
        <form>
          <label>Username:</label>
          <input type="text" id="input2" name="username" />

          <label>Password:</label>
          <input type="password" id="input2" name="password" />

          <button type="submit" onClick={() => handleLogin()}>Login</button> <br></br>
          <Link to="/Create">Dont have a account?</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
