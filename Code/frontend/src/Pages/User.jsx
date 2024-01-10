import React, { useState } from 'react';
import Navbar from "../Components/Navbar";
import Axios from 'axios';
import './User.css';

function User() {

        const [showNewPassword, setShowNewPassword] = useState(false);
        const [newPassword, setNewPassword] = useState('');
        const [Email, setUsername] = useState('');
        const [Password, setPassword] = useState('');
        const [usernameExists, setUsernameExists] = useState(false);


        //Gets user input and checks if the user exists
        const handleUsername = async () => {
                try {
                        const response = await Axios.get(`http://localhost:3001/user/${Email}/${Password}`);
                        console.log('Username exists:', response.data);
                        setUsernameExists(true);
                        setShowNewPassword(true);
                } catch (error) {
                        alert('Username does not exist');
                        setShowNewPassword(false);
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
        //Gets user input and sets it to the state
        const handleNewPasswordChange = (event) => {
                setNewPassword(event.target.value);
        };

        //Updates the user in the database
        const handleUpdate = async () => {
                try {
                        const response = await Axios.put(`http://localhost:3001/user/${Email}`, {
                                Email: Email,
                                Password: newPassword,
                        });
                        alert('Password updated');
                        console.log('Updated', response.data);
                } catch (error) {
                        console.error('Error updating item:', error);
                }

        };
        //Deletes the user in the database
        const handleDelete = async () => {
                try {
                  const response = await Axios.delete(`http://localhost:3001/User/${Email}`);
                  console.log('Deleted User Response:', response.data);
                  window.location.href = '/';

                  alert('User deleted');
                
                } catch (error) {
                  console.error('Error deleting user:', error);
                }
              };

        return (
                <div className='height'>
                        <Navbar />
                        
                        <div className="user-editing-page">
                                <h1>User Editing Page</h1>
                                {/*Gets user input*/}
                                <label>
                                        Username:
                                        <input type="text" id='Emails' value={Email} onChange={handleChange} />
                                </label>
                                <br />
                                <label>
                                        Password:
                                        <input type="Password" value={Password} onChange={handlepChange} />
                                </label>
                                <br />
                                {/*if user info is correct, opens up change password section*/}
                                <button type="submit" onClick={handleUsername}>Submit</button>

                                {showNewPassword && (
                                        <div>
                                                <h2>Set New Password</h2>
                                                <label>
                                                        New Password:
                                                        <input type="password" id='newPasswords' value={newPassword} onChange={handleNewPasswordChange} />
                                                        <button type="submit" onClick={handleUpdate}>Update</button>
                                                        <button type="submit" onClick={handleDelete}>Delete</button>
                                                </label>
                                        </div>
                                )}
                        </div>
                </div>
        );
}

export default User;
