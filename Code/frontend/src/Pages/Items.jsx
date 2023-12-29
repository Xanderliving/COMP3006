import './items.css';
import Navbar from "../Components/Navbar";
import React from 'react'
import { useState, useEffect } from 'react';

import Axios from 'axios';

function Items(){
    const [listofItems, setListOfItems] = useState([]);
    const [Customer, setCustomer] = useState("");
    const [Item, setItem] = useState("");

    useEffect(() => {
      Axios.get(`http://localhost:3001/items/`).then((response) => {
        setListOfItems(response.data);
            });
    }, []);

    const createBasket = () => {
      Axios.post("http://localhost:3001/addBasket/", {
        Customer: "",
        Item: "",
      }).then((response) => {
        setCustomer([
          ...Customer,
          {
            Customer,
            Item,
          },
        ]);
      });
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
                    <div class="product-title">{item.Name}</div>
                    <div class="product-description">{item.Description}</div>
                    <div class="product-price">£{item.Cost}</div>
                    <input type="text" placeholder="Name..." onChange={(event) => {setCustomer(event.target.value);}}/>
                    <input type="text" placeholder="Name..." onChange={(event) => {setItem(event.target.value);}}/>
                    <button class="product-button" onClick={createBasket}>Add to Cart</button>

                  </div>
                  
                </div>
            );
          })}
          </div>
        </div>
    );
    
}
function add(){
    
}

export default Items;

    
    
