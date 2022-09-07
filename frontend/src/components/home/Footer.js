import React from 'react';

import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (

        <div className='footer'>
            <div className='footer-container'>
                <h1>Hey</h1>
                <p>Thank You for visiting our page!</p>
            </div>
            <div className='bottom-line'>
                <h1>FOLLOW US AT</h1>
                <a className='link' href='https://www.instagram.com/meta_academics/'>
                    <FaInstagram></FaInstagram> Instagram
                </a>
                
                <h1>CONTACT US AT</h1><p >meta.academics@gmail.com</p>
            </div>
        </div>
        
    );
}

export default Footer