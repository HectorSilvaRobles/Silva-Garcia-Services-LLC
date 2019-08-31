import React, { Component } from 'react'
import './footer.css'
import {NavLink} from 'react-router-dom'
import {FaFacebook, FaPhone, FaEnvelope, FaMapMarked} from 'react-icons/fa'
import SGLogo from '../../Media/SGLogo.png'
import SPIRILogo from '../../Media/Logo copy.png'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='upper-footer'>
                    <div className='footer-nav'>
                        <div className='real-nav_1'>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/services'>Services</NavLink>
                            <NavLink to='/projects'>Projects</NavLink>
                        </div>
                        <div className='real-nav_2'>
                            <NavLink to='/about'>About</NavLink>
                            <NavLink to='/contact'>Contact</NavLink>
                        </div>
                    </div>
                    <div className='footer-info'>
                        <span>
                            <FaFacebook size='30px' color='white' className='icons' /> 
                            <h1>Follow Us On Facebook</h1>
                        </span>
                        <span>
                            <FaPhone size='30px' color='white' className='icons' />
                            <h1>(720) 336-8523</h1>
                        </span>
                        <span>
                            <FaEnvelope size='30px' color='white' className='icons' />
                            <h1>sghandymenservices@gmail.com</h1>
                        </span>
                        <span>
                            <FaMapMarked size='30px' color='white' className='icons' />
                            <h1>4087 Silver Star Grove, Colorado Springs, CO</h1>
                        </span>
                    </div>
                </div>
                <div className='company-info'>
                    <div className='footer-business'>
                        <img src={SGLogo} />
                        <h3>&#169; 2019 | Silva-Garcia Handymen Services, LLC</h3>
                        <h3>All Rights Reserved</h3>
                    </div>
                    <div className='spiri'>
                        <img src={SPIRILogo} />
                        <h1>SPIRI Powered</h1>
                    </div>
                </div>
            </div>
        )
    }
}
