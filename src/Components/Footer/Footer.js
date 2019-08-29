import React, { Component } from 'react'
import './footer.css'
import {NavLink} from 'react-router-dom'
import {FaFacebook, FaPhone, FaEnvelope, FaMapMarked} from 'react-icons/fa'
import SGLogo from '../../Media/SGLogo.png'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-nav'>
                    <div></div>
                    <div className='real-nav'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/projects'>Projects</NavLink>
                        <NavLink to='/services'>Services</NavLink>
                        <NavLink to='/about'>About Us</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                    </div>
                </div>
                <div className='footer-business'>
                    <img src={SGLogo} />
                    <h3>&#169; 2019 | Silva-Garcia Handymen Services, LLC</h3>
                    <h3>All Rights Reserved</h3>
                </div>
                <div className='footer-info'>
                    <span>
                        <FaFacebook size='30px' color='white' /> 
                        <h1>Follow Us On Facebook</h1>
                    </span>
                    <span>
                        <FaPhone size='30px' color='white' />
                        <h1>(720) 336-8523</h1>
                    </span>
                    <span>
                        <FaEnvelope size='30px' color='white' />
                        <h1>sghandymenservices@gmail.com</h1>
                    </span>
                    <span>
                        <FaMapMarked size='30px' color='white' />
                        <h1>4087 Silver Star Grove, Colorado Springs, CO</h1>
                    </span>
                </div>
            </div>
        )
    }
}
