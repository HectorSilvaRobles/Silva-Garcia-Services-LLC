import React, { Component } from "react";
import "./header.css";
import SGLogo from '../../Media/SGLogo.png'
import {NavLink} from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll";

export default class Header extends Component {
  render() {
    return (
    <div className="header">
      <Link activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {500}>
        <div className='header-logo'>
          <img src={SGLogo} />
          <h1>Silva-Garcia</h1>
        </div>
      </Link>

      <div className='header-nav'>
        <NavLink exact to='/' >Home</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/services'>Services</NavLink>
        <NavLink to='/about'>About Us</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </div>
    </div>
    );
  }
}
