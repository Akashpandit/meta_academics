import React, {useState} from 'react';
import {SliderData} from './sliderData.js';
import './home.css'
import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from 'react-icons/fa';


const ImgSilder = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if(!Array.isArray(props.slides) || props.slides.length <= 0) {
    return null;
  }

  return (
    <div className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {
        SliderData.map((slide, index) => 
        {
          return (

          <div className={index === current? 'slide active': 'slide'} key={index}>
              {index === current && (<img src={slide.image} alt='travel' className='image' key={index} />)}
          </div>
          
          )
          
        })
      }
    </div>
  )
}

export default ImgSilder