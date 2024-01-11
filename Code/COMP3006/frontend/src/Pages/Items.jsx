import './items.css';
import Navbar from "../Components/Navbar";
import React from 'react'
import { useState, useEffect } from 'react';

import Axios from 'axios';

function Items(){
    const [listofItems, setListOfItems] = useState([]);
    const [listofBaskets, setListOfBaskets] = useState([]);

    //Gets all items from the database
    useEffect(() => {
      Axios.get(`http://localhost:3001/items/`).then((response) => {
        setListOfItems(response.data);
            });
    }, []);

    //Gets all basket items from the database
    useEffect(() => {
      Axios.get(`http://localhost:3001/Basket/`).then((response) => {
        setListOfBaskets(response.data);
            });
    }, []);


    //Posts the items into the basket to the database
    const handlePost = async (id, name, description, cost) => {
      try {
        const response = await Axios.post('http://localhost:3001/Basket/', {
          Customer: "Bob",
          Item: name,
          Cost: cost,
          Quantity: 1,

        });
  
        console.log('Item posted successfully:', response.data);
      } catch (error) {
        console.error('Error posting item:', error);
      }
    
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
                    {/*Displays items*/}
                  <div class="product-details">
                   <img class="product-image" src="https://via.placeholder.com/300" alt="Product 1" />
                    <div class="product-title"value={item.Name} id={item.Name}>{item.Name}</div>
                    <div class="product-description" value={item.Description} id="Name">{item.Description}</div>
                    <div class="product-price" value={item.Cost} id={item.Cost} >£{item.Cost}</div>
                    <button class="product-button" onClick={() => handlePost(item._id, item.Name, item.Description, item.Cost)}>Add to Cart</button>

                  </div>
                  
                </div>
            );
          })}
          </div>
        </div>
    );
    
}


export default Items;