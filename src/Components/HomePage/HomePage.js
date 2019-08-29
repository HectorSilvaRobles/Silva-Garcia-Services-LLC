import React, { Component } from 'react'
import HeroBanner from './HeroBanner/HeroBanner'
import About from './About/About'
import OurWork from './OurWork/OurWork'
import OurServices from './OurServices/OurServices'
import ContactSection from './ContactSection/ContactSection'
import Header from '../Header/Header'

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
                <ContactSection />
            </div>
        )
    }
}
