import React, { Component } from 'react'
import './footer.css'
import {NavLink} from 'react-router-dom'
import SGLogo from '../../Media/SGLogo.png'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-nav'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/projects'>Projects</NavLink>
                    <NavLink to='/services'>Services</NavLink>
                    <NavLink to='/about'>About Us</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>
                <div className='footer-business'>
                    <img src={SGLogo} />
                    <h3>&#169; 2019 | Silva-Garcia Handymen Services, LLC</h3>
                    <h3>All Rights Reserved</h3>
                </div>
                <div className='footer-info'></div>
            </div>
        )
    }
}
