import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  
    <nav>
      <ul>
        <li><Link className="active logo" to="/">LOGO</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/AboutUs">About Us</Link></li>
        <li><Link to="/OurEvents">Our Events</Link></li>
        <li><Link to="/word">Word</Link></li>
        <li><Link to='/words'>All Words</Link></li>

      </ul>
    </nav>


  )
}

export default Navbar;