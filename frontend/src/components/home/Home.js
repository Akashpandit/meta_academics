import React from 'react'
import './home.css';
import Navbar from './Navbar';
import upEvent from "../home/mic.jpg";
import ImgSilder from './ImgSilder.js';
import { SliderData } from './sliderData.js';
import Team from './Team';
import Footer from './Footer';
const Home = () => {
  return (
    <div>

      <section className='header-design'>
        <div className='content'>
          <h1 className='heading'>Meta Academics Cell</h1>
          <h3 className='tagline'><i><b>For those who dare</b></i></h3>
          <p className='para'>lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem</p>
        </div>
      </section>

      <div className='food-for-thought'>
        <h1 >FOOD FOR THOUGHT</h1>

        <div className='FT-details'>
          <img alt='example' className='event-poster' src={upEvent} />
          <h1 className='special-head' >WORD OF THE DAY</h1>
          <p>We have designed this to help you enhance your vocabulary. Let us learn and grow together. We have designed this to help you enhance your vocabulary. Let us learn and grow together. We have designed this to help you enhance your vocabulary. Let us learn and grow together.</p>
        </div>
      </div>
      <div className='past-events'>
        <h1>OUR PAST EVENTS</h1>

        <ImgSilder slides={SliderData} />


      </div>

      <div className='our-team'>
        <h1 className='team-heading'>OUR TEAM</h1>
        <Team />
        <div className='btn-container'>
          <div className='vertical-center'>
            <button className='btn-dark' >VIEW WHOLE TEAM</button>
          </div>
        </div>

      </div>

      <div className='alumni-container'>
        <h1>FROM THE PIONEERS</h1>
        <div className='alumni' >
          <figure class="image-block">
            <h1>The Beach</h1>
            <img src="https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            <figcaption>
              <h3>
                More Info
              </h3>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              <button>
                More Info
              </button>
            </figcaption>
          </figure>

          <figure class="image-block">
            <h1>The Beach</h1>
            <img src="https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            <figcaption>
              <h3>
                More Info
              </h3>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              <button>
                More Info
              </button>
            </figcaption>
          </figure>

          <figure className="image-block">
            <h1>The Beach</h1>
            <img src="https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            <figcaption>
              <h3>
                More Info
              </h3>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              <button>
                More Info
              </button>
            </figcaption>
          </figure>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;