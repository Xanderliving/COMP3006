import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Items from './Pages/Items';
import Basket from './Pages/Basket';
import Login from './Pages/Login';
import NoPage from './Pages/NoPage';
import Client from './Pages/Client';
import Create from './Pages/CreateAccount';
import User from './Pages/User';
import Axios from 'axios'

export default function App() {
  const [listofItems, setListOfItems] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/items").then((response) => {
      setListOfItems(response.data);
    });
  }, []);
  
  

  return(
    
    <div className="App">
        {/*Links to all the pages including a page not found*/}
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Client' element={<Client />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Item' element={<Items />} />
            <Route path='/Basket' element={<Basket />} />
            <Route path='/Create' element={<Create />} />
            <Route path='/User' element={<User />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      
        <h1> Welcome to the Store </h1>
    </div>
    
  )
  
}
