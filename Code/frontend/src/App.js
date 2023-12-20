import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Items from './Pages/Items';
import Basket from './Pages/Basket';
import NoPage from './Pages/NoPage';
import Axios from 'axios'

export default function App() {
  const [listofItems, setListOfItems] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/getDrinks").then((response) => {
      setListOfItems(response.data);
    });
  }, []);
  
  return(
    
    <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Item' element={<Items />} />
            <Route path='/Basket' element={<Basket />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      
    
    </div>
  )
}