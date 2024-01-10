import "./login.css"
import Axios from 'axios';
import image from '../Assests/logo.png'
import { Link } from "react-router-dom";
import { React, useState} from 'react';

const Login = () => {
  const [Email, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [usernameExists, setUsernameExists] = useState(false);


  //Gets all users from the database and checks if the user exists
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
  //Gets user input and sets it to the state
  const handleChange = (event) => {
    setUsername(event.target.value);   
  };
  //Gets user input and sets it to the state
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
        
        {/*Gets user input*/}
          <label>
            Username:
            <input type="text" value={Email} onChange={handleChange} />
            Password:
            <input type="text" value={Password} onChange={handlepChange} />
          </label>
          <button type="submit" onClick={handleUsername}> Login</button>
       {/*Redirects to new page if they want to make a account*/}
        <Link to="/Create">Dont have a account?</Link>

      </div>
    </div>
  );
};

export default Login;
