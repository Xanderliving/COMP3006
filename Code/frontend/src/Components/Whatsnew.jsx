import React from 'react'
import './WhatsnewStyles.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function Whatsnew() {
  const [listofItems, setListOfItems] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/items").then((response) => {
      setListOfItems(response.data);
          });
  }, []);
  return (
    <div className='Wnbg'>
       <div className='ItemDisplay'>
        {listofItems.map((item) => {
          return (
          <div>
            
            <div className='Wn1'></div>
            <div className='Wn2'></div>
            <div className='Wn3'></div>
            <div className='Wn1desc'>{setListOfItems}</div>

        </div>
        );
        })}
      </div>
    </div>
    
  )
}

export default Whatsnew