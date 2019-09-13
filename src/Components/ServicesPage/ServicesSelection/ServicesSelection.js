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
                } else {
                    style = 'serviceCard'
                }

                console.log(val.image)

                return (
                    <div className={style} key={index}>
                        <div className='sc-left'>
                            <div className='sc-header'>
                                <h1>{val.name}</h1>
                            </div>
                            <div className='sc-info'>
                                <p>{val.description}</p>
                                <button onClick={() => this.redirectContactPage()}>Schedule Free Estimate</button>
                            </div>
                        </div>
                        <div className='sc-right' >
                            <img src={val.image} />
                        </div>
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
