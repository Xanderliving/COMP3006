import React, {useState} from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import{BsPerson} from 'react-icons/bs'
import{HiOutlineMenuAlt4} from 'react-icons/hi'
import{FaFacebook, FaInstagram, FaPinterest, FaTwitter} from 'react-icons/fa'
import { Link } from "react-router-dom";

import './navbarStyles.css'
import image from '../Assests/logo.png'

function Navbar() {
  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)
  return (
    <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
        <div className="logo">
            <img className='logo'src={image}></img>
        </div>
        <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Item">Products</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
        </ul>
        <div className="nav-icons">
          <Link to="/Basket"><FaShoppingBasket size={30} className='icon' style={{marginRight: '1rem'}} /></Link>

          <BsPerson className='icon' />
        </div>
        <div className="hamburger" onClick={handleNav}>
          <HiOutlineMenuAlt4 className='icon'/>
        </div>

        <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
          <ul className="mobile-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Item">Products</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
          </ul>
          <div>
            <div className="mobile-menu-bottom">
              <div className="social-icons">
                <FaFacebook className='icon'/>
                <FaInstagram className='icon'/>
                <FaTwitter className='icon'/>
                <FaPinterest className='icon'/>
              </div>

            </div>
          </div>
        </div>

    </div>
  )
}

export default Navbar