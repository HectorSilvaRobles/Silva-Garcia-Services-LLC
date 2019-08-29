import React, { Component } from 'react'
import HeroBanner from './HeroBanner/HeroBanner'
import About from './About/About'
import OurWork from './OurWork/OurWork'
import OurServices from './OurServices/OurServices'
import Header from '../Header/Header'
import CallToAction from '../CallToAction/CallToAction'

export default class HomePage extends Component {
    componentDidMount = () => {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div id='hero'>
                <Header />
                <HeroBanner  />
                <OurServices />
                <OurWork />
                <About />
                <CallToAction />
            </div>
        )
    }
}
