import React, { Component } from 'react'
import './herobanner.css'
import tools from '../../../Media/workers.jpg'
import {Redirect} from 'react-router-dom'

export default class HeroBanner extends Component {
    constructor(){
        super()

        this.state = {
            redirect: false
        }
    }

    redirectHandle = () => {
        this.setState({
            redirect: true
        })
    }
    render() {
        return (
            <div className='hero-banner' id='hero'> 
                {this.state.redirect ? <Redirect to='/contact' /> : null}
                <div className='hp-left-hero'>
                    <div className='hp-left-hero-info'>
                        <h1>Need Something Done?</h1>
                        <h3>We Can Do It For You.</h3>
                        <button onClick={() => this.redirectHandle()}>Get A Free Estimate</button>
                    </div>
                </div>
                <div className='hp-right-hero'>
                    <img src={tools} />
                </div>
                
            </div>
        )
    }
}
