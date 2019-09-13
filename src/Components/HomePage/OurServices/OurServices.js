import React, { Component } from 'react'
import './ourservices.css'
import brush from '../../../Media/brush.png'
import cement from '../../../Media/cement.png'
import tile from '../../../Media/tile.png'
import shovel from '../../../Media/shovel.png'
import cleaning from '../../../Media/cleaning.jpg'
import {Redirect} from 'react-router-dom'

export default class OurServices extends Component {
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
            <div className='our-services' id='services'>
            {this.state.redirect ? <Redirect to='/services' /> : null}
                <div className='os-header-section'>
                    <h1>Our Services</h1>
                </div>
                <div className='os-service-options'>
                    <div className='so-top-row'>
                        <div className='so-box'>
                            <div className='so-icon'>
                                <img src={cement} />
                            </div>
                            <p>Concrete Work</p>
                        </div>
                        <div className='so-box'>
                            <div className='so-icon'>
                                <img src={brush} />
                            </div>
                            <p>Painting Services</p>
                        </div>
                        <div className='so-box'>
                            <div className='so-icon'>
                                <img src={shovel} />
                            </div>
                            <p>Landscape Services</p>
                        </div>
                    </div>
                    <div className='so-bottom-row'>
                        <div className='so-box'>
                            <div className='so-icon'>
                                <img src={tile} />
                            </div>
                            <p>Floor Work</p>
                        </div>
                        <div className='so-box'>
                            <div className='so-icon'>
                                <img src={cleaning} />
                            </div>
                            <p>Cleaning Services</p>
                        </div>
                        <div className='so-box'>
                            <h1>See what else we can do for you</h1>
                            <button onClick={() => this.redirectHandle()}>Learn More</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
