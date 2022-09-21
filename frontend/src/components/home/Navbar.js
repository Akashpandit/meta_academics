import React, { Component } from 'react';
import './nav.css';
import { Link, renderMatches } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import metaLogo from '../../assets/LogoWithThunder.png'


class Navbar extends Component {

  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }


  render() {
    return (

      <>
        <nav>

          <a href="/">
            <img src={metaLogo} alt="Meta Logo" width="150px" />
          </a>
          <div>
            <ul id='navbar' className={this.state.clicked ? "#navbar active" : "navbar"}>
              <li >
                <a className='active' href="/">Home</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
              <li>
                <a href="/AboutUs">About Us</a>
              </li>
              <li>
                <a href="/OurEvents">Our Events</a>
              </li>
              <li>
                <a href="/word">Word</a>
              </li>
            </ul>
          </div>
          <div id='mobile' onClick={this.handleClick}>
            {this.state.clicked ? (
              <i id='bar'>
                <AiOutlineClose color='white' size={"30px"} />
              </i>
            ) : (
              <i id='bar'>
                <GiHamburgerMenu color='white' size={"30px"} />
              </i>

            )}


          </div>
        </nav>
      </>



    )
  }
}

export default Navbar;