import React, { Component } from 'react'
import ProjectHero from './ProjectHero/ProjectHero'
import ProjectHeader from './ProjectsHeader/ProjectsHeader'
import ProjectGallery from './ProjectsGallery/ProjectsGallery'
import ProjectTestimonials from './ProjectTestimonials/ProjectTestimonials'
import CallToAction from '../CallToAction/CallToAction'

export default class ProjectPage extends Component {
    render() {
        return (
            <div>
                <ProjectHero />
                <ProjectHeader />
                <ProjectGallery />
                <ProjectTestimonials />
                <CallToAction />
            </div>
        )
    }
}
