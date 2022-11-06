import React, { Component } from 'react';
import './nav.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
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

      <nav>

        <a href="/">
          <img src={metaLogo} alt="Meta Logo" width="150px" />
        </a>

        <ul id='navbar' className={this.state.clicked ? "navbar active" : "navbar"} >

          <CustomLink to="/">

            Home
          </CustomLink>

          <CustomLink to="/Contact">
            Contact
          </CustomLink>

          <CustomLink to="/AboutUs">
            About Us
          </CustomLink>

          <CustomLink to="/OurEvents">Our Events</CustomLink>
          <CustomLink to="/words">Word</CustomLink>

        </ul>

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


    )
  }
}

export default Navbar;

function CustomLink({ to, children, ...props }) {

  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )

}