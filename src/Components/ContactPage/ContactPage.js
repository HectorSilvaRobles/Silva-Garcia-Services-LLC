import React, { Component } from 'react'
import ContactSection from './ContactSection/ContactSection'
import Header from '../Header/Header'

export default class ContactPage extends Component {
    componentDidMount = () => {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Header />
                <ContactSection />
            </div>
        )
    }
}
