import React, { Component } from 'react'
import './herobanner.css'

export default class HeroBanner extends Component {
    render() {
        return (
            <div className='hero-banner' id='hero'> 
                <div className='hp-left-hero'>
                    <div className='hp-left-hero-info'></div>
                </div>
                <div className='hp-right-hero'></div>
                
            </div>
        )
    }
}
