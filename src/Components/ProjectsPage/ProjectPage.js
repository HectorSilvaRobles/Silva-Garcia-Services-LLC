import React, { Component } from 'react'
import ProjectHero from './ProjectHero/ProjectHero'
import ProjectHeader from './ProjectsHeader/ProjectsHeader'
import ProjectGallery from './ProjectsGallery/ProjectsGallery'
import ProjectTestimonials from './ProjectTestimonials/ProjectTestimonials'
import CallToAction from '../CallToAction/CallToAction'
import Header from '../Header/Header'

export default class ProjectPage extends Component {
    componentDidMount = () => {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Header />
                <ProjectHero />
                <ProjectHeader />
                <ProjectGallery />
                <ProjectTestimonials />
                <CallToAction />
            </div>
        )
    }
}
