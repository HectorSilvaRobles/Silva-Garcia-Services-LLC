import React, { Component } from 'react'
import ServicesHero from './ServicesHero/ServicesHero'
import ServicesSelection from './ServicesSelection/ServicesSelection'
import CallToAction from '../CallToAction/CallToAction'

export default class ServicesPage extends Component {
    render() {
        return (
            <div>
                <ServicesHero />
                <ServicesSelection />
                <CallToAction />
            </div>
        )
    }
}
