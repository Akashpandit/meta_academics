import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowAltCircleLeft,FaArrowAltCircleRight, FaInstagram, FaCodepen, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './teams.css';
import Slider from "react-slick";
import {MemberData} from './Members.js';

const Team = () => {
    
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows:true,
        nextArrow: <FaArrowAltCircleRight />,
        prevArrow: <FaArrowAltCircleLeft />,
        className: 'react__slick__slider__parent',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div>
          <Slider {...settings}>
            {MemberData.map((item,index)=>{
                return(

                    <div className='container' key={index}>
                        <div className={item.cardClasses}>
                            <div className="border">
                            <h2 className='teams-h2'>{item.name}</h2>
                            <div class="icons">
                                <FaCodepen></FaCodepen>
                                <FaInstagram></FaInstagram>
                                <FaGithub ></FaGithub>
                                <FaTwitter></FaTwitter>
                                <FaLinkedinIn></FaLinkedinIn>
                            </div>
                              
                            </div>

                        </div>
                        
                    </div>
                )
            })}
          </Slider>
          
        </div>
      );
    
}

export default Team