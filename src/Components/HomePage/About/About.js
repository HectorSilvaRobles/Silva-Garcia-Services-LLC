import React, { Component } from 'react'
import './about.css'
import workers from '../../../Media/workers.jpeg'

export default class About extends Component {
    render() {
        return (
            <div className='about-section' id='about'>
                <div className='hp-about-left'>
                    <div className='hp-about-header'>
                        <h2>What We Do</h2>
                        <div></div>
                    </div>
                    <div className='hp-about-info'>
                        <h1>General Labor Around Colorado Springs</h1>
                        <p>We provide the labor force needed to help complete the projects you want done</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className='hp-about-right'>
                </div>
                
            </div>
        )
    }
}
