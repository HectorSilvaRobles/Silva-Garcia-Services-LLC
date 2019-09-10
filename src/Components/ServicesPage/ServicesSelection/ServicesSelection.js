import React, { Component } from 'react'
import './servicesselection.css'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';

class ServicesSelection extends Component {
    constructor(props){
        super(props)

        this.state = {
            redirect: false
        }
    }

    redirectContactPage = () => {
        this.setState({redirect: true})
    }
    render() {
        const services = this.props.service
        let mapServices
        if(services) {
            let style = 'serviceCard'
            mapServices = services.map((val, index, arr) => {
                if(index % 2 != 0){
                    style = 'serviceCard opp'
                    console.log(index)
                } else {
                    style = 'serviceCard'
                }
                console.log(style)

                return (
                    <div className={style} key={index}>
                        <div className='sc-left'>
                            <div className='sc-header'>
                                <h1>{val.name}</h1>
                            </div>
                            <div className='sc-info'>
                                <p>{val.description}</p>
                                <button onClick={() => this.redirectContactPage()}>Get An Estimate</button>
                            </div>
                            
                        </div>
                        <div className='sc-right'></div>
                    </div>
                )
            })
        }
        return (
            <div className='service-selection'>
                {this.state.redirect ? <Redirect to='/contact' /> : null}
                {mapServices}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState
}

const myConnect = connect(mapStateToProps)

export default myConnect(ServicesSelection)
