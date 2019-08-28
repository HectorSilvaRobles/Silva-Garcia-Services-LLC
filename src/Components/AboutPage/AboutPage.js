import React, { Component } from 'react'
import AboutSection from './AboutSection_1/AboutSection_1'
import AboutSection_2 from './AboutSection_2/AboutSection_2'
import AboutSection_3 from './AboutSection_3/AboutSection_3'
import AboutSection_4 from './AboutSection_4/AboutSection_4'
import CallToAction from '../CallToAction/CallToAction'

export default class AboutPage extends Component {
    render() {
        return (
            <div>
                <AboutSection />
                <AboutSection_2 />
                <AboutSection_3 />
                <AboutSection_4 />
                <CallToAction />
            </div>
        )
    }
}
