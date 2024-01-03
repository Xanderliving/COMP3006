import './basket.css';
import Navbar from "../Components/Navbar";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Client = ({ items, onDeleteItem }) => {
  const [listofItems, setListOfItems] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/Basket/`).then((response) => {
      setListOfItems(response.data);
    });
  }, []);;



  const handleUpdate = async (id, quantity) => {
    try {
      const response = await Axios.put(`http://localhost:3001/Basket/${id}`, {
        Quantity: document.getElementById(quantity).value,
      });
      window.location.reload();
      console.log('Updated', response.data);
    } catch (error) {
      console.error('Error updating item:', error);
    }
    
  };

  const handleDelete = async (id) => {
    try {
      const response = await Axios.delete(`http://localhost:3001/Basket/${id}`);
      console.log('Deleted Item Response:', response.data);
      onDeleteItem(id);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
    window.location.reload();
  };

  return (
    <div>
    <Navbar/>
    <div className="height">
    <div>
        {listofItems.map((item) => {
            return (
                  <div class="product-card">
                  <div class="product-details">
                   <img class="product-image" src="https://via.placeholder.com/300" alt="Product 1" />
                    <div class="product-title">{item.Name}</div>
                    <div class="product-description">{item.Description}</div>   
                    <div class="product-price">£{item.Cost}</div>
                    <div>Quantity  <input type='number' id={item.Quantity}  placeholder={item.Quantity}></input></div>
                    <button onClick={() => handleUpdate(item._id, item.Quantity)}>Update</button>
                    <button onClick={() => handleDelete(item._id)}>Delete</button>

                  </div>
                  
                </div>
            );
          })}
          </div>
    </div>
    </div>
  );
};

export default Client;



