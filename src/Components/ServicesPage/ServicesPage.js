import React, { Component } from 'react'
import ServicesHero from './ServicesHero/ServicesHero'
import ServicesSelection from './ServicesSelection/ServicesSelection'
import CallToAction from '../CallToAction/CallToAction'
import Header from '../Header/Header'
import SideDrawer from '../Header/SideDrawer/SideDrawer'
import Backdrop from '../Header/SideDrawer/Backdrop/Backdrop'

export default class ServicesPage extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevstate) => {
            return {sideDrawerOpen: !prevstate.sideDrawerOpen}
        })
    }

    backdropClick = () => {
        this.setState({sideDrawerOpen: false})
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Header drawerClick={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {this.state.sideDrawerOpen? <Backdrop click={this.backdropClick} /> : null}
                <ServicesHero />
                <ServicesSelection />
                <CallToAction />
            </div>
        )
    }
}
