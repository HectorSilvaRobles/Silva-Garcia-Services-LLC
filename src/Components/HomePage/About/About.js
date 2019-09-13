import React, { Component } from 'react'
import './about.css'
import {Redirect} from 'react-router-dom'

export default class About extends Component {
    constructor(props){
        super(props)

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
            <div className='about-section' id='about'>
            {this.state.redirect ? <Redirect to='/about' /> : null}
                <div className='hp-about-left'>
                    <div className='hp-about-header'>
                        <h2>What We Do</h2>
                        <div></div>
                    </div>
                    <div className='hp-about-info'>
                        <h1>General Labor Around Colorado Springs</h1>
                        <p>We provide the labor force needed to help complete the projects you want done</p>
                        <button onClick={() => this.redirectHandle()}>Learn More</button>
                    </div>
                </div>
                <div className='hp-about-right'>
                </div>
                
            </div>
        )
    }
}
