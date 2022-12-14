import React from 'react'
import './home.css';
import upEvent from "../home/mic.jpg";
import ImgSilder from './ImgSilder.js';
import { SliderData } from './sliderData.js';
import Team from './Team';
import TeamMemberComponent from './TeamMemberComponent';
import AkashImage from '../../assets/AkashPandit.jpg';
import ArpitaImage from '../../assets/ArpitaMohanty.jpg';
import GeetansaImage from '../../assets/Geetansa.JPG';
import AvinashImage from '../../assets/AvinashPrasad.png';
import SonamImage from '../../assets/SonamAcharya.jpg';


const Home = () => {
  return (
    <div className='bodyContainer'>

      <section className='header-design'>
        <div className='content'>
          <h1 className='heading'>Meta Academics Cell</h1>
          <h3 className='tagline'><i><b>For those who dare</b></i></h3>
          <div className='para'>
            lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem
          </div>
        </div>
      </section>

      <div className='food-for-thought'>
        <h1 >FOOD FOR THOUGHT</h1>

        <div className='FT-details'>
          <div className="fft-img-container">
            <img alt='example' src={upEvent} />
          </div>
          <div className="fft-content-container">
            <div className="fft-heading">
              <h1>WORD OF THE DAY</h1>
            </div>
            <div className="fft-fullcontent">
              <p>We have designed this to help you enhance your vocabulary. Let us learn and grow together. We have designed this to help you enhance your vocabulary. Let us learn and grow together. We have designed this to help you enhance your vocabulary. Let us learn and grow together.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='past-events'>
        <h1>OUR PAST EVENTS</h1>

        <ImgSilder slides={SliderData} />

      </div>

      <div className='our-team'>
        <h1 className='team-heading'>OUR TEAM</h1>
        <div className="team-outer-container">
          <div className="team-members-container">
            <TeamMemberComponent
              memberName="Akash Pandit"
              memberDesignation="Secretary"
              memberImage={AkashImage} />
            <TeamMemberComponent
              memberName="Arpita Mohanty"
              memberImage={ArpitaImage}
              memberDesignation="Executive Secretary" />

          </div>
          <div className="team-members-container">
            <TeamMemberComponent
              memberName="Geetansa"
              memberDesignation="4th Yr Co-ordinator"
              memberImage={GeetansaImage}
            />
            <TeamMemberComponent
              memberName="R Avinash Prasad"
              memberDesignation="4th Yr Co-ordinator"
              memberImage={AvinashImage}

            />
            <TeamMemberComponent
              memberName="Sonam Acharya"
              memberDesignation="4th Yr Co-ordinator"
              memberImage={SonamImage}
            />

          </div>
        </div>
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


    </div>
  );
}

export default Home;