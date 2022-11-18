import React from 'react';

import { FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import thunderBadge from '../../assets/thunderbadge.png';
import './footer.css'
const Footer = () => {
    return (

        <div className="full-footer-container">
            <div className="footer-outer-container">
                <div className="footer-shape-container"></div>
                <div className="footer-left-part">
                    <p>Hey, thank you for visiting our page.</p>
                    <div className="insta-container">
                        <p>Stay Connected</p>
                        <div className="socials-container">

                            <a className='link' href='https://www.instagram.com/meta_academics/'>
                                <FaInstagram color='green' size={20} />
                            </a>
                            <a className='link' href="mailto:meta.adademics@gmail.com">
                                <SiGmail color='green' size={20} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-right-part">
                    <img src={thunderBadge} alt="" />
                    <div className="footer-right-part-shape"></div>
                </div>
            </div>
        </div>
        // <div className='footer'>
        //     <div className='footer-container'>
        //         <h1>Hey</h1>
        //         <p>Thank You for visiting our page!</p>
        //     </div>
        //     <div className='bottom-line'>
        //         <h1>FOLLOW US AT</h1>
        //         <a className='link' href='https://www.instagram.com/meta_academics/'>
        //             <FaInstagram></FaInstagram> Instagram
        //         </a>

        //         <h1>CONTACT US AT</h1><p >meta.academics@gmail.com</p>
        //     </div>
        // </div>

    );
}

export default Footer