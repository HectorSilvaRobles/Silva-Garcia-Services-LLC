import React, { Component } from 'react'
import ContactForm from './ContactForm/ContactForm'

import './contactsection.css'

export default class ContactSection extends Component {
    render() {
        return (
            <div className='contact-section'>
                <div className='cs-form-box'>
                    <div className='cs-photo-area'></div>
                    <div className='cs-input-area'>
                        <div className='cs-input-header'>
                            <h1>Let Us Know
                            What You Want Done</h1>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        )
    }
}
