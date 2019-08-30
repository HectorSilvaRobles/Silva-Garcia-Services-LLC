import React, { Component } from 'react'
import AboutSection from './AboutSection_1/AboutSection_1'
import AboutSection_2 from './AboutSection_2/AboutSection_2'
import AboutSection_3 from './AboutSection_3/AboutSection_3'
import AboutSection_4 from './AboutSection_4/AboutSection_4'
import CallToAction from '../CallToAction/CallToAction'
import Header from '../Header/Header'
import SideDrawer from '../Header/SideDrawer/SideDrawer'
import Backdrop from '../Header/SideDrawer/Backdrop/Backdrop'

export default class AboutPage extends Component {
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
                <AboutSection />
                <AboutSection_2 />
                <AboutSection_3 />
                <AboutSection_4 />
                <CallToAction />
            </div>
        )
    }
}
