import React, { Component } from 'react'
import HeroBanner from './HeroBanner/HeroBanner'
import About from './About/About'
import OurWork from './OurWork/OurWork'
import OurServices from './OurServices/OurServices'
import Header from '../Header/Header'
import CallToAction from '../CallToAction/CallToAction'
import SideDrawer from '../Header/SideDrawer/SideDrawer'
import Backdrop from '../Header/SideDrawer/Backdrop/Backdrop'

export default class HomePage extends Component {
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
            <div id='hero'>
                <Header drawerClick={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {this.state.sideDrawerOpen? <Backdrop click={this.backdropClick} /> : null}
                <HeroBanner  />
                <OurServices />
                <OurWork />
                <About />
                <CallToAction />
            </div>
        )
    }
}
