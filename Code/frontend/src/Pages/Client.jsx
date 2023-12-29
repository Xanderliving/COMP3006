import "./client.css";
import Navbar from "../Components/Navbar";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Client = ({ items, onDeleteItem }) => {
  const [listofItems, setListOfItems] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/items/`).then((response) => {
      setListOfItems(response.data);
    });
  }, []);;



  const handleUpdate = async (id, name, description, cost) => {
    try {
      const response = await Axios.put(`http://localhost:3001/items/${id}`, {
        Name: document.getElementById(name).value,
        Description: document.getElementById(description).value,
        Cost: document.getElementById(cost).value
      });
      window.location.reload();
      console.log('Updated', response.data);
    } catch (error) {
      console.error('Error updating item:', error);
    }
    
  };

  const handleDelete = async (id) => {
    try {
      const response = await Axios.delete(`http://localhost:3001/items/${id}`);
      console.log('Deleted Item Response:', response.data);
      onDeleteItem(id);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
    window.location.reload();
  };

  const handlePost = async () => {
    try {
      const response = await Axios.post('http://localhost:3001/items/', {
        Name: document.getElementById("Create1").value,
        Description: document.getElementById("Create2").value,
        Cost: document.getElementById("Create3").value,
      });
      window.location.reload();

      console.log('Item posted successfully:', response.data);
    } catch (error) {
      console.error('Error posting item:', error);
    }
  
  };




  return (
    <div>
    <Navbar/>
    <div className="height">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {listofItems.map((item) => (
          <tr key={item._id}>
            <td>{item._id}</td>
            <td><input  type="text" id={item.Name} placeholder={item.Name} /></td>
            <td><input  type="text" id={item.Description} placeholder={item.Description} /></td>
            <td><input type="text" id={item.Cost} placeholder={item.Cost} /></td>
            <td>
              <button onClick={() => handleUpdate(item._id, item.Name, item.Description, item.Cost)}>Update</button>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>

      <thead>
        <tr>
          <th>Create</th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Cost</th>
        </tr>
        <tr>
          <td><input id="Create1" type="text"  placeholder="Name" /></td>
          <td><input id="Create2" type="text" placeholder="Description" /></td>
          <td><input id="Create3" type="text"  placeholder="Cost" /></td>
          <button onClick={() => handlePost()}>Create</button>
        </tr>
      </thead>
    </table>
    </div>
    </div>
  );
};

export default Client;