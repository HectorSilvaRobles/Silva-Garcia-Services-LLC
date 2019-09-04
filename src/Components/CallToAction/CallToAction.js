import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import './calltoaction.css'

export default class CallToAction extends Component {
    constructor(props){
        super(props)

        this.state = {
            redirect: false
        }
    }
    handleContactPage = ( ) => {
        this.setState({
            redirect: true
        })
    }
    render() {
        return (
            <div className='call-to-action'>
                {this.state.redirect ? <Redirect to='/contact' /> : null}
                <div className='cta-wording'>
                    <h1>Let Us Help Complete Your Next Project</h1>
                </div>
                <div className='cta-button'>
                    <button onClick={() => this.handleContactPage()}>Get An Estimate</button>
                </div>
                
            </div>
        )
    }
}
