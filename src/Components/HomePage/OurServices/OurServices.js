import React, { Component } from 'react'
import './ourservices.css'
import brush from '../../../Media/brush.png'
import cement from '../../../Media/cement.png'
import tile from '../../../Media/tile.png'
import shovel from '../../../Media/shovel.png'
import cleaning from '../../../Media/cleaning.jpg'

export default class OurServices extends Component {
    render() {
        return (
            <div className='our-services' id='services'>
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
                                <img src={shovel} />
                            </div>
                            <p>Landscape Services</p>
                        </div>
                        <div className='so-box'>
                            <div className='so-icon'>
                                <img src={brush} />
                            </div>
                            <p>Wall Work</p>
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
                            <button>Learn More</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
