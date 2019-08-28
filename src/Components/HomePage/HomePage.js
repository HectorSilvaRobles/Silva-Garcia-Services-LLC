import React, { Component } from 'react'
import HeroBanner from './HeroBanner/HeroBanner'
import About from './About/About'
import OurWork from './OurWork/OurWork'
import OurServices from './OurServices/OurServices'
import ContactSection from './ContactSection/ContactSection'


export default class HomePage extends Component {
    render() {
        return (
            <div id='hero'>
                <HeroBanner  />
                <OurServices />
                <OurWork />
                <About />
                <ContactSection />
            </div>
        )
    }
}
