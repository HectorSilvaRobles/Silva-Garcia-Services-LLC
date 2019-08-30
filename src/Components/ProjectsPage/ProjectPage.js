import React, { Component } from 'react'
import ProjectHero from './ProjectHero/ProjectHero'
import ProjectHeader from './ProjectsHeader/ProjectsHeader'
import ProjectGallery from './ProjectsGallery/ProjectsGallery'
import ProjectTestimonials from './ProjectTestimonials/ProjectTestimonials'
import CallToAction from '../CallToAction/CallToAction'
import Header from '../Header/Header'
import SideDrawer from '../Header/SideDrawer/SideDrawer'
import Backdrop from '../Header/SideDrawer/Backdrop/Backdrop'

export default class ProjectPage extends Component {
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
                <ProjectHero />
                <ProjectHeader />
                <ProjectGallery />
                <ProjectTestimonials />
                <CallToAction />
            </div>
        )
    }
}
