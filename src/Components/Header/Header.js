import React, { Component } from "react";
import "./header.css";
import SGLogo from '../../Media/SGLogo.png'
import {NavLink, Redirect} from 'react-router-dom'
import DrawerToggleButton from './SideDrawer/DrawerToggleButton/DrawerToggleButton'

export default class Header extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      redirect: false
    }
  }

  logoToHomePage = () => {
    this.setState({
      redirect: true
    })
  }

  render() {
    return (
    <div className="header">
      {this.state.redirect ? <Redirect to='/' /> : null}
      <div className='header-logo' >
        <img src={SGLogo} onClick={() => this.logoToHomePage()} />
        <h1 onClick={() => this.logoToHomePage()} >Silva-Garcia</h1>
      </div>
      <div className='header-nav'>
        <NavLink exact to='/' >Home</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/services'>Services</NavLink>
        <NavLink to='/about'>About Us</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </div>
      <div className='hamburger'>
        <DrawerToggleButton click={this.props.drawerClick} />
      </div>
    </div>
    );
  }
}
