import './items.css';
import Navbar from "../Components/Navbar";
import React from 'react'
import { useState, useEffect } from 'react';

import Axios from 'axios';

function Items(){
    const [listofItems, setListOfItems] = useState([]);
    useEffect(() => {
      Axios.get(`http://localhost:3001/getDrinks/`).then((response) => {
        setListOfItems(response.data);
            });
    }, []);

    return(
        <div className="format">
        <Navbar />
        <div>
        {listofItems.map((item) => {
            return (
              <div className="num1">
                <div><h1>Name: {item.Name}</h1></div>
                <div><h1>Quantity: {item.Quantity}</h1></div>
                <div><h1>Description: {item.Description}</h1></div>
           
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

    
    
