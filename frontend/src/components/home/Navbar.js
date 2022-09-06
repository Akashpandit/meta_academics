import React from 'react';
import './nav.css';

const Navbar = () => {
  return (
    
    <nav>
      <ul>
        <li><a className="active logo" href="#home">LOGO</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Our Events</a></li>
        <li><a href="#about">Word</a></li>
        
      </ul>
    </nav>
  
        
  )
}

export default Navbar;