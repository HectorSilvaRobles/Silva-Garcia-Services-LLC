import React, { Component } from 'react'
import './herobanner.css'
import tools from '../../../Media/workers.jpg'

export default class HeroBanner extends Component {
    render() {
        return (
            <div className='hero-banner' id='hero'> 
                <div className='hp-left-hero'>
                    <div className='hp-left-hero-info'>
                        <h1>Need Something Done?</h1>
                        <h3>We Can Do It For You.</h3>
                        <button>Get An Estimate</button>
                    </div>
                </div>
                <div className='hp-right-hero'>
                    <img src={tools} />
                </div>
                
            </div>
        )
    }
}
