import React, { Component } from 'react'
import ContactSection from './ContactSection/ContactSection'
import Header from '../Header/Header'
import SideDrawer from '../Header/SideDrawer/SideDrawer'
import Backdrop from '../Header/SideDrawer/Backdrop/Backdrop'

export default class ContactPage extends Component {
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
                <ContactSection />
            </div>
        )
    }
}
