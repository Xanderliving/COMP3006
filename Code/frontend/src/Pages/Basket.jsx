import './basket.css';
import Navbar from "../Components/Navbar";
import React from 'react'
import { useState, useEffect } from 'react';

import Axios from 'axios';

function Basket(){
    const [listofItems, setListOfItems] = useState([]);
    const [items, setItems] = useState([]);
    const drinkNameToDelete = 'Mojtio';


    useEffect(() => {
      Axios.get(`http://localhost:3001/items`).then((response) => {
        setListOfItems(response.data);
            });
    }, []);


    const ItemList = () => {
        const [items, setItems] = useState([]);
      
        useEffect(() => {
          fetchData();
        }, []);
      
        const fetchData = async () => {
          try {
            const response = await Axios.get('http://localhost:3001/items');
            setItems(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        const handleDelete = async (itemId) => {
          try {
            await Axios.delete(`http://localhost:3001/items`);
            setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
          } catch (error) {
            console.error('Error deleting item:', error);
          }
        };
      
        return (
            <div>
              <h1>Item List</h1>
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    {item.name}
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                  </li>
                ))}
              </ul>
            </div>
          );
        };

      return(
        <div className="format">
        <Navbar />
        <div class="product-container">
    
    </div>
        <div>
        {listofItems.map((item) => {
            return (
                  <div class="product-card">
                  <div class="product-details">
                   <img class="product-image" src="https://via.placeholder.com/300" alt="Product 1" />
                    <div class="product-title">{item.Item}</div>
                    <div class="product-description">{item.Description}</div>
                    <div class="product-price">£{item.Cost}</div>
                    <button>Delete</button>

                  </div>
                  
                </div>
            );
          })}
          </div>
        </div>
    );

    
}


export default Basket;


    
    
