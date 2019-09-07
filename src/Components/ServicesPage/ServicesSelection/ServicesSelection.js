import React, { Component } from 'react'
import './servicesselection.css'
import {connect} from 'react-redux'
import axios from 'axios'

class ServicesSelection extends Component {
    render() {
        axios.get(`/api/${this.props.service}`)
        .then(res => console.log(res.data))

        return (
            <div className='service-selection'>
                
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState
}

const myConnect = connect(mapStateToProps)

export default myConnect(ServicesSelection)
