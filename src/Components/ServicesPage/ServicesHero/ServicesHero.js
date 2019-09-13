import React, { Component } from 'react'
import './serviceshero.css'
import {connect} from 'react-redux'
import {setService} from '../../../dux/reducer'
import axios from 'axios'

class ServicesHero extends Component {

    componentDidMount =() => {
        axios.get(`/api/concrete`).then(res => this.props.setService(res.data))
    }
    servicesToDisplay = (service) => {
        axios.get(`/api/${service}`).then(res => this.props.setService(res.data))
    }
    render() {
        console.log(this.props)
        return (
            <div className='services-hero'>
                <div className='dark-background'></div>
                <div className='sh-title'>
                    <h1>Our Services</h1>
                </div>
                <div className='sh-options'>
                    <button className='service-options' onClick={()=>this.servicesToDisplay('concrete')} >Concrete</button>
                    <button className='service-options' onClick={()=>this.servicesToDisplay('wall-work')}>Painting</button>
                    <button className='service-options' onClick={()=>this.servicesToDisplay('landscaping')}>Landscaping</button>
                    {/* <button className='service-options' onClick={()=>this.servicesToDisplay('flooring')}>Flooring</button> */}
                    <button className='service-options' onClick={()=>this.servicesToDisplay('cleaning')}>Cleaning</button>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState
}

const mapReduxState = {
    setService
}

const myConnect = connect(mapStateToProps, mapReduxState)

export default myConnect(ServicesHero)