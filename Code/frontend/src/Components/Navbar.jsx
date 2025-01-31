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
            <img className='logo' src={image}></img>
        </div>
          {/*Set links for main navbar*/}
        <ul className="nav-menu">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Item">Products</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
        </ul>
        <div className="nav-icons">
            {/*Links for basket and user page*/}
          <Link to="/Basket"><FaShoppingBasket size={30} className='icon' style={{marginRight: '1rem'}} /></Link>
          <Link to="/User"><BsPerson size={30} className='icon' style={{marginRight: '1rem'}}/></Link>
        </div>
        <div className="hamburger" onClick={handleNav}>
          <HiOutlineMenuAlt4 className='icon'/>
        </div>

        <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
            {/*Set links for hamburger navbar*/}
          <ul className="mobile-nav">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Item">Products</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
            <li><Link to="/Basket">Basket</Link></li>
            <li><Link to="/User">Account</Link></li>
          </ul>
          <div>
              {/*Socail logos (Not set)*/}
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