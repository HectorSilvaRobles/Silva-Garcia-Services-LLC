import React, { Component } from 'react'
import ServicesHero from './ServicesHero/ServicesHero'
import ServicesSelection from './ServicesSelection/ServicesSelection'
import CallToAction from '../CallToAction/CallToAction'
import Header from '../Header/Header'

export default class ServicesPage extends Component {
    componentDidMount = () => {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Header />
                <ServicesHero />
                <ServicesSelection />
                <CallToAction />
            </div>
        )
    }
}
